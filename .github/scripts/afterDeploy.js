const { join } = require("node:path");
const { readdirSync, readFileSync, writeFileSync } = require("node:fs");

/**
 * Generate 404 gh-page - how to use
 * 1) create a new github action (or directly run this script with npm)
 * 2) edit index.html and add the attribut "data-page-type" on the body `<body data-page-type="main"> ... </body>`
 * 3) Get the value of data-page-type, when the 404.html is created by 
 * the script, the attribut data-page-type is defined/replaced with the 
 * value 404. `const v = document.body.getAttribute("data-page-type") === "404"` 
 * 4) use the constant and apply your logic (guard, router, boostrap, ....)
 */
const cfg = {
  folderPathToAngularIndex: "dist",   // path to angular dist; ex "./root_project/dist"
  regexIndex: "index.*\\.html",       // regex to find index.html in folder $folderPathToAngularIndex
  fileOption: { encoding: "utf-8" },  // nodejs file option
}

const dist = join(process.cwd(), cfg.folderPathToAngularIndex);
const rgx = new RegExp(cfg.regexIndex);
const arr = readdirSync(dist).filter(v => rgx.test(v));

if (arr.length === 1) {
  try {
    const contentHTML = readFileSync(join(dist, arr[0]), cfg.fileOption)
      .replace(/data-page-type=".*"/, 'data-page-type="404"');
    writeFileSync(join(dist, "404.html"), contentHTML, cfg.fileOption);
    console.log("successfully 404.html generated");
  } catch (err) {
    throw err
  }
} else {
  console.error(`${arr.length} index found. not supported by the script.`, { dist, arr });
  process.exit(1);
}
