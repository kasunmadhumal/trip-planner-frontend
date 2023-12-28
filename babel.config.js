module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
      "expo-router/babel",
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env"
        },
      ],
    ],
    env: {
      production: {
        plugins: ["react-native-paper/babel"],
      },
    },
  };
};
