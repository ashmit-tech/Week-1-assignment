const fs = require("fs");
const currentContent = fs.readFileSync("example.txt", "utf8");
let removeExtraSpaces = function (currentContent) {
  return currentContent.replace(/\s+/g, " ").trim();
};
let data = removeExtraSpaces(currentContent);
fs.writeFile("example.txt", data, (encoding = "utf8"), (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
