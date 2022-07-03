const path = require("path");

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src/"),
    };

    config.plugins.push(...[
      require('../src/config/unplugin-auto-import'),
      require('../src/config/unplugin-vue-components'),
    ]);
    // keep this if you're doing typescript
    // config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "storybook-addon-sass-postcss",
      options: {
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
