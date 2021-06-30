const { createMetroConfiguration } = require('expo-yarn-workspaces');

const defaultConfig = createMetroConfiguration(__dirname);


defaultConfig.transformer.assetPlugins = ['expo-asset/tools/hashAssetFiles']

module.exports = defaultConfig
