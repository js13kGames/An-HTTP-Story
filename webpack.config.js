const path = require("path");
const { EnvironmentPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ClosurePlugin = require("closure-webpack-plugin");

module.exports = (env) => {
  let mode = "production";
  let debug = false;
  let useLocalBabylon = false;
  let minifyAssets = true;
  let useClosure = false;
  switch (env.TARGET) {
    case "local":
      mode = "development";
      debug = true;
      minifyAssets = false;
      useLocalBabylon = true;
      break;
    case "production":
      useLocalBabylon = true;
      break;
    case "finalize":
      break;
    case "finalize-closure":
      useClosure = true;
      break;
  }
  env.DEBUG = debug;

  const config = {
    mode,
    entry: "./site/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      filename: "game.[hash:8].js",
    },
    stats: "minimal",
    devtool: debug ? "eval-cheap-source-map" : false,
    plugins: [
      new CleanWebpackPlugin(),
      new EnvironmentPlugin(env),
      new HtmlWebpackPlugin({
        inject: "head",
        scriptLoading: "defer",
        template: path.resolve(__dirname, "site/index.html"),
        templateParameters: {
          babylonSrc: useLocalBabylon
            ? "babylon.js"
            : "https://js13kgames.com/webxr-src/2020/babylon.js",
        },
        minify: minifyAssets
          ? {
              collapseWhitespace: true,
              minifyCSS: true,
              removeComments: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
    ],
  };

  if (useLocalBabylon) {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [{ from: "site/vendor/babylon.js", to: "babylon.js" }],
      })
    );
  }

  if (useClosure) {
    config.optimization = {
      concatenateModules: false,
      minimizer: [
        new ClosurePlugin(
          { mode: "AGGRESSIVE_BUNDLE" },
          {
            compilation_level: "ADVANCED",
            languageOut: "ECMASCRIPT_2017",
          }
        ),
      ],
    };
  }

  return config;
};
