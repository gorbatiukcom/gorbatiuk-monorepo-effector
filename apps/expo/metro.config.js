// // Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const exclusionList = require("metro-config/src/defaults/exclusionList");
const {
  getMetroTools,
  getMetroAndroidAssetsResolutionFix,
} = require("react-native-monorepo-tools");

const monorepoMetroTools = getMetroTools();

const androidAssetsResolutionFix = getMetroAndroidAssetsResolutionFix();

const config = getDefaultConfig(__dirname);
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, "../..");

config.transformer = {
  ...config.transformer,
  // Apply the Android assets resolution fix to the public path...
  publicPath: androidAssetsResolutionFix.publicPath,
  getTransformOptions: async () => ({
    transform: {
      experimentalImportSupport: false,
      inlineRequires: false,
    },
  }),
};
config.server = {
  ...config.server,
  // ...and to the server middleware.
  enhanceMiddleware: (middleware) => {
    return androidAssetsResolutionFix.applyMiddleware(middleware);
  },
};
config.watchFolders = [workspaceRoot, ...monorepoMetroTools.watchFolders];
config.resolver = {
  ...config.resolver,
  // Ensure we resolve nohoist libraries from this directory.
  blockList: exclusionList(monorepoMetroTools.blockList),
  extraNodeModules: monorepoMetroTools.extraNodeModules,
  nodeModulesPath: [
    path.resolve(projectRoot, "node_modules"),
    path.resolve(workspaceRoot, "node_modules"),
  ],
};

//
module.exports = config;

// Trash
// // Monorepo
// const projectRoot = __dirname;
// const workspaceRoot = path.resolve(__dirname, "../..");

// config.watchFolders = [workspaceRoot];
// config.resolver.nodeModulesPath = [
//   path.resolve(projectRoot, "node_modules"),
//   path.resolve(workspaceRoot, "node_modules"),
// ];

// // const { createMetroConfiguration } = require("expo-yarn-workspaces");

// // module.exports = createMetroConfiguration(__dirname);
