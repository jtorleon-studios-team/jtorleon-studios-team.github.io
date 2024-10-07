
const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const pathToPrivacyText = path.resolve("src", "privacy-policy.txt");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({

      "VERSION": JSON.stringify("4711"),

      "PRIVACY": JSON.stringify(getPrivacityData())
    })
  ],
};

function getPrivacityData() {
  return fs.readFileSync(pathToPrivacyText, { encoding: "utf-8" })
    .split(/\n/g)
    .map(line => {
      const match = line.match(/\[privacy-version:(\d+)\]/);
      if (match) {
        return [1, `Privacy Policy Version ${match[1]}`];
      }

      for (let i = 6; i > 1; i--) {
        if (line.startsWith("#".repeat(i))) {
          return [i, line.slice(i)]
        }
      }
      return [0, line];
    })
}
