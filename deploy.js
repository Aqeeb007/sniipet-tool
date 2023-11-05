const { default: axios } = require("axios");
const fs = require("fs");

const projectId = "9d6753d9-6044-4b78-9a7c-21765ff194b9";
const url = `https://sbx.jnjux.com`;
const creds = {};

const getEndingFilePaths = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  const result = [];

  files.map((file) => {
    // if file is a directory then getEndingFilePaths
    if (fs.lstatSync(`${dirPath}/${file}`).isDirectory()) {
      result.push(...getEndingFilePaths(`${dirPath}/${file}`));
    } else {
      result.push(`${dirPath}/${file}`);
    }
  });
  return result;
};

const allFiles = getEndingFilePaths("./out");
console.log(allFiles.length);
const assets = [];

allFiles.map((file) => {
  if (
    file.includes("js") ||
    file.includes("css") ||
    file.includes("html") ||
    file.includes("json") ||
    file.includes("map") ||
    file.includes("txt")
  ) {
    const rawFile = fs.readFileSync(file);
    const utf8File = rawFile.toString("utf-8");
    assets.push({
      runtimeId: projectId,
      // ./build to ''
      path: file.replace("./out", ""),
      source: utf8File,
    });
  } else {
    const rawFile = fs.readFileSync(file);
    const base64File = Buffer.from(rawFile).toString("base64");
    // base64 to base64 utf-8
    assets.push({
      runtimeId: projectId,
      path: file.replace("./out", ""),
      source: base64File,
    });
  }
});
const indexPage = fs.readFileSync("./out/index.html");
const utf8File = indexPage.toString("utf-8");
const upload = {
  name: "snippettool",
  assets,
  id: projectId,
  page: utf8File,
};

// save to file upload.json prettified
// fs.writeFileSync('./upload.json', JSON.stringify(upload, null, 2));

axios
  .post(`${url}/user/logon/ldap/jjldap`, creds)
  .then((res) => {
    // console.log(res);
    console.log(res.headers);
    // get cookie from res
    const cookie = res.headers["set-cookie"];
    console.log(cookie);

    axios
      .post(`${url}/api/functions/WebAppRuntime/save`, upload, {
        // set cookie in header
        headers: {
          Cookie: cookie,
        },
      })
      .then((res) => {
        console.log(res.data, res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
