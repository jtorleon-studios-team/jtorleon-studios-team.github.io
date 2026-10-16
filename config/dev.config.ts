import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { ASSET_TARGET } from "./constant.config";
import { modulePlugins } from "./module.config";
import themeConfig from "./theme.config";

export default {
  url: "http://localhost:3000/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  title: "JTorleon Studios", // TODO
  tagline: "JTorleon Studios Team", // TODO
  favicon: `img/${ASSET_TARGET}/favicon.ico`,
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
        docs: false,
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
  plugins: [...modulePlugins],
  themeConfig,
} satisfies Config;
