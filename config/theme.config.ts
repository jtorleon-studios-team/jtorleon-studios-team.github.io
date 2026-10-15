import { themes as prismThemes } from "prism-react-renderer";
import type { ThemeConfig } from "@docusaurus/preset-classic";

export default {
  image: "img/docusaurus-social-card.jpg",
  colorMode: {
    respectPrefersColorScheme: true,
  },
  navbar: {
    logo: {
      alt: "My Site Logo",
      src: "img/logo.svg",
    },
    items: [
      {
        type: "docSidebar",
        sidebarId: "tutorialSidebar",
        position: "left",
        label: "Tutorial",
      },
      {
        to: "/blog",
        label: "Blog",
        position: "left",
      },
    ],
  },
  footer: {
    style: "dark",
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies ThemeConfig;
