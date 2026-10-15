import themeConfig from "./theme.config";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

export default {
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  title: "JTorleon Studios",
  tagline: "JTorleon Studios Team",
  favicon: "img/favicon.ico",
  future: {
    v4: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./config/sidebars.config.ts",
          editUrl: "#", // TODO
        },
        blog: {
          showReadingTime: true,
          editUrl: "#", // TODO
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig,
} satisfies Config;
