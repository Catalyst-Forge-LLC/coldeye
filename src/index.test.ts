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
});
