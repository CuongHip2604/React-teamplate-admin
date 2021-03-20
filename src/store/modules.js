import camelCase from "lodash-es";

const requireModule = require.context(
  "../modules/",
  true,
  /.*\/store\/index\.js$/
);

const modules = {};

requireModule.keys().forEach((filePath) => {
  const fileNameArr = filePath.split("/");
  const fileName = fileNameArr[1]; // get folder module name
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

  modules[moduleName] = requireModule(filePath).default;
});

export default modules;
