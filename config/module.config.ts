import fs from "node:fs";
import path from "node:path";
import type { NavbarItem } from "@docusaurus/theme-common";
import type { PluginConfig } from "@docusaurus/types";
import { GITHUB_ORG } from "./constant.config";

const MODULES_DIR = path.resolve(__dirname, "../modules");

export const modules = fs
  .readdirSync(MODULES_DIR, { withFileTypes: true })
  .filter((v) => v.isDirectory() && fs.existsSync(path.join(MODULES_DIR, v.name, "docs")))
  .map((v) => v.name);

export const moduleNavbarItems: NavbarItem[] = modules.map((m) => ({
  type: "docSidebar",
  sidebarId: "defaultSidebar",
  docsPluginId: m,
  label: m,
}));

export const modulePlugins: PluginConfig[] = modules.map((name) => [
  "@docusaurus/plugin-content-docs",
  {
    id: name,
    path: path.join(MODULES_DIR, name, "docs"),
    routeBasePath: name,
    editUrl: `${GITHUB_ORG}/${name}/edit/main/`,
  },
]);
