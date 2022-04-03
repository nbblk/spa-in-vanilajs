module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          node: false,
        },
      },
    ],
  ];
  const plugins = [["@babel/plugin-transform-runtime"]];

  return {
    presets,
    plugins,
  };
};
