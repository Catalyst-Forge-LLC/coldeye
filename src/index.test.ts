import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import { assertSkillsPresent, packageRoot, skillDir, skillNames } from "./index.js";

test("skill folder ships SKILL.md", () => {
	assert.deepEqual(assertSkillsPresent(), []);
	for (const name of skillNames) {
		assert.ok(existsSync(join(skillDir(name), "SKILL.md")), name);
	}
});

function readSkill(): string {
	return readFileSync(join(skillDir("cold-eye"), "SKILL.md"), "utf8").replace(/\r\n/g, "\n");
}

test("skill is the critique hour and does not name a CLI", () => {
	const skill = readSkill();
	assert.match(skill, /^---\nname: cold-eye\n/m);
	assert.match(skill, /<name>\.cold-eye\.md/);
	assert.match(skill, /Not for plans, decisions/);
	assert.match(skill, /shipped, deemed done, or ready to/);
	assert.doesNotMatch(skill, /npx coldeye/);
	assert.doesNotMatch(skill, /red-team/);
	assert.doesNotMatch(skill, /API key/);
});

test("package ships skills and has no bin", () => {
	const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8")) as {
		bin?: unknown;
		files: string[];
		exports: Record<string, unknown>;
	};
	assert.equal(pkg.bin, undefined);
	assert.ok(pkg.files.includes("skills"));
	assert.ok("./skills/*" in pkg.exports);
});

test("docs nav has a markdown file for every item", () => {
	const nav = JSON.parse(
		readFileSync(join(packageRoot, "site", "docs", "_nav.json"), "utf8"),
	) as { sections: Array<{ items: Array<{ id: string }> }> };
	for (const section of nav.sections) {
		for (const item of section.items) {
			assert.ok(existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)), item.id);
		}
	}
	execFileSync("node", [join(packageRoot, "site", "scripts", "build-docs.mjs")], {
		cwd: join(packageRoot, "site"),
	});
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "index.html")));
	const built = readFileSync(join(packageRoot, "site", "docs", "dist", "index.html"), "utf8");
	assert.match(built, /site-theme\.css/);
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "assets", "site-theme.css")));
	const tokens = readFileSync(
		join(packageRoot, "site", "docs", "dist", "assets", "site-theme.css"),
		"utf8",
	);
	assert.match(tokens, /--accent:/);
	const docsCss = readFileSync(join(packageRoot, "site", "docs", "assets", "docs.css"), "utf8");
	assert.match(docsCss, /var\(--bg/);
	assert.doesNotMatch(docsCss, /#f6f3ee/);
});

test("short install and skill URLs have a local redirect page", () => {
	const config = readFileSync(join(packageRoot, "site", "filepress.config.ts"), "utf8");
	const redirects = readFileSync(join(packageRoot, "site", "static", "_redirects"), "utf8");
	for (const slug of ["install", "skill", "critique"]) {
		const html = readFileSync(join(packageRoot, "site", "static", slug, "index.html"), "utf8");
		assert.match(html, new RegExp(`/docs/${slug}`));
		assert.match(config, new RegExp(`url: "/${slug}"`));
		assert.match(redirects, new RegExp(`^/${slug} /docs/${slug} 308`, "m"));
	}
});

test("sync writes a zip the install page can download", () => {
	execFileSync("node", [join(packageRoot, "scripts", "sync-skill-static.mjs")], {
		cwd: packageRoot,
	});
	assert.ok(existsSync(join(packageRoot, "site", "static", "skills", "cold-eye.zip")));
});

test("ensure-lease prints a port and does not crash", () => {
	const out = execFileSync(
		"node",
		[join(packageRoot, "scripts", "ensure-lease.mjs"), "coldeye-site", "5200"],
		{ encoding: "utf8" },
	);
	const port = String(out).trim().split(/\r?\n/).at(-1) ?? "";
	assert.match(port, /^\d+$/);
});

test("package tarball lists the skill folder", () => {
	const out = execFileSync("pnpm", ["pack", "--dry-run"], {
		cwd: packageRoot,
		encoding: "utf8",
		shell: process.platform === "win32",
	});
	assert.match(out, /skills\/cold-eye\/SKILL\.md/);
	assert.doesNotMatch(out, /^bin\b/m);
});

test("no required runtime env", () => {
	const example = readFileSync(join(packageRoot, ".env.example"), "utf8");
	assert.match(example, /No runtime secrets/);
	assert.doesNotMatch(example, /REQUIRED|must set/i);
});
