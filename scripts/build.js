const path = require("path");
const spawn = require("cross-spawn");
const { webpack } = require("webpack");

const webpack_application_dev_config = require("./webpack/development/webpack.application.dev.config");
const webpack_preload_dev_config = require("./webpack/development/webpack.preload.dev.config");
const webpack_process_dev_config = require("./webpack/development/webpack.process.dev.config");

(async () => {

  /** 编译前端文件 **/
  const webpack_application_dev_compair = webpack(webpack_application_dev_config);
  /** watch前端文件 **/
  webpack_application_dev_compair.run((error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

  /** 编译ipcRender文件 **/
  const webpack_preload_dev_compair = webpack(webpack_preload_dev_config);
  /** watch ipcRender文件 **/
  webpack_preload_dev_compair.run((error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

  /** 编译ipcMain文件 **/
  const webpack_process_dev_compair = webpack(webpack_process_dev_config);
  /** watch ipcMain文件 **/
  webpack_process_dev_compair.run((error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

})();