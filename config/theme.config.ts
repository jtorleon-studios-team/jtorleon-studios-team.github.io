import type { ThemeConfig } from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";
import { ASSET_TARGET, NAME } from "./constant.config";
import { moduleNavbarItems } from "./module.config";

export default {
  //image: "img/docusaurus-social-card.jpg", // TODO
  colorMode: {
    respectPrefersColorScheme: true,
  },
  navbar: {
    logo: {
      alt: `${NAME} Logo`,
      src: `img/${ASSET_TARGET}/favicon-32x32.png`,
    },
    items: [
      {
        type: "dropdown",
        label: "Mods",
        items: moduleNavbarItems,
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
    copyright: `Copyright © ${new Date().getFullYear()} ${NAME}. Built with Docusaurus.`,
  },
  prism: {
    theme: prismThemes.github,
    darkTheme: prismThemes.dracula,
  },
} satisfies ThemeConfig;
