import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/coldeye";
const npm = "https://www.npmjs.com/package/coldeye";

export default defineFilepressConfig({
	title: "Cold-eye",
	description:
		"A hostile first-reader pass on anything shipped, deemed done, or ready to ship. An agent with the skill writes the critique.",
	tagline: "A hostile read of what claims to be done.",
	url: "https://coldeye.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.svg",
	ogImage: "/logo.svg",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Install", href: "/docs/install" },
		{ label: "Skill", href: "/docs/skill" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "Docs", href: "/docs/" },
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
