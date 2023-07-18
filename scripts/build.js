const path = require("path");
const webpack = require("webpack");

/**
 * Creates application build using different config files
 */
(function () {
  const configFile = process.argv[2];

  if (!configFile) {
    console.log(`Please specify a config file. Example: \n \
      npm run build -- async \n \
      npm run build -- initial \n \
      npm run build -- maxSize \n \
      npm run build -- false \n`);

    return;
  }

  return new Promise((resolve, reject) => {
    const webpackConfig = require(path.resolve(process.cwd(), `webpack.${configFile}.config.js`));

    if (!webpackConfig) {
      return reject(new Error("Webpack config not found."));
    }

    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err);
      }

      console.info(stats.toString(webpackConfig.stats));
      if (stats.hasErrors()) {
        return reject(new Error("Webpack compilation errors"));
      }

      return resolve();
    });
  });
})();
