import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/coldeye";
const npm = "https://www.npmjs.com/package/coldeye";

export default defineFilepressConfig({
	title: "Cold-eye",
	description: "About to share a README, guide, skill, or site? Cold-eye gives your AI agent a repeatable review method. You get a report that quotes the problem, explains where a new user gets stuck, and tells you what to fix before the handoff.",
	tagline: "A hostile read of what claims to be done.",
	lede: "Review skill for your AI agent",
	url: "https://coldeye.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Posts", href: "/posts" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [
		{ url: "/docs", dir: "docs/dist" },
		{ url: "/install", dir: "static/install" },
		{ url: "/skill", dir: "static/skill" },
		{ url: "/critique", dir: "static/critique" },
	],
});
