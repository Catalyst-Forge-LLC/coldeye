import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/coldeye";
const npm = "https://www.npmjs.com/package/coldeye";

export default defineFilepressConfig({
	title: "Cold-eye",
	description: "Before you hand off a finished guide, site, or package, let your agent read it without your explanations. Cold-eye finds missing steps and conflicting claims, so you can repair the handoff.",
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
