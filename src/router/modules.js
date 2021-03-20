import camelCase from "lodash-es";

const requireModule = require.context("../modules/", true, /.*\/routes\.js$/);

const modulesRoutes = {};

requireModule.keys().forEach((filePath) => {
  const fileNameArr = filePath.split("/");
  const fileName = fileNameArr[1]; // get folder module name
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ""));

  modulesRoutes[moduleName] = requireModule(filePath).default;
});

export default modulesRoutes;
