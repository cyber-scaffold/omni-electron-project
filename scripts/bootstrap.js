const path = require("path");
const spawn = require("cross-spawn");
const { webpack } = require("webpack");

const assert_file = require("./transactions/assert_file");
const webpack_application_dev_config = require("./webpack/development/webpack.application.dev.config");
const webpack_preload_dev_config = require("./webpack/development/webpack.preload.dev.config");
const webpack_process_dev_config = require("./webpack/development/webpack.process.dev.config");

(async () => {

  const process_task_list = [];

  /** 编译前端文件 **/
  const webpack_application_dev_compair = webpack(webpack_application_dev_config);
  /** watch前端文件 **/
  webpack_application_dev_compair.watch({}, (error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
    };
  });

  /** 编译ipcRender文件 **/
  const webpack_preload_dev_compair = webpack(webpack_preload_dev_config);
  /** watch ipcRender文件 **/
  webpack_preload_dev_compair.watch({}, async (error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
      if (await assert_file()) {
        process_task_list.forEach((single_process_task) => single_process_task.kill());
        process_task_list.push(spawn("electron", [path.resolve(process.cwd(), "./dist/process.js")], { stdio: "inherit" }));
      } else {
        return false;
      };
    };
  });

  /** 编译ipcMain文件 **/
  const webpack_process_dev_compair = webpack(webpack_process_dev_config);
  /** watch ipcMain文件 **/
  webpack_process_dev_compair.watch({}, async (error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
      if (await assert_file()) {
        process_task_list.forEach((single_process_task) => single_process_task.kill());
        process_task_list.push(spawn("electron", [path.resolve(process.cwd(), "./dist/process.js")], { stdio: "inherit" }));
      } else {
        return false;
      };
    };
  });

})();