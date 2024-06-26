const fs = require("fs");
const path = require("path");
const spawn = require("cross-spawn");
const chokidar = require("chokidar");
const { promisify } = require("util");
const { webpack } = require("webpack");

const webpack_application_dev_config = require("./webpack/development/webpack.application.dev.config");
const webpack_preload_dev_config = require("./webpack/development/webpack.preload.dev.config");
const webpack_process_dev_config = require("./webpack/development/webpack.process.dev.config");

setImmediate(async () => {

  const process_task_list = [];

  await promisify(fs.rm)(path.resolve(process.cwd(), "./dist/"), { recursive: true, force: true });

  // const watcher = chokidar.watch([path.resolve(process.cwd(), "./dist/")], { persistent: true });

  // watcher.on("all", () => {
  //   process_task_list.forEach((single_process_task) => single_process_task.kill());
  //   process_task_list.push(spawn("electron", [process.cwd()], { stdio: "inherit" }));
  // });

  /** 编译前端文件 **/
  const webpack_application_dev_compair = webpack(webpack_application_dev_config);
  /** watch前端文件 **/
  webpack_application_dev_compair.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      // process_task_list.forEach((single_process_task) => single_process_task.kill());
      // process_task_list.push(spawn("electron", [process.cwd()], { stdio: "inherit" }));
    };
  });

  /** 编译ipcRender文件 **/
  const webpack_preload_dev_compair = webpack(webpack_preload_dev_config);
  /** watch ipcRender文件 **/
  webpack_preload_dev_compair.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      // process_task_list.forEach((single_process_task) => single_process_task.kill());
      // process_task_list.push(spawn("electron", [process.cwd()], { stdio: "inherit" }));
    };
  });

  /** 编译ipcMain文件 **/
  const webpack_process_dev_compair = webpack(webpack_process_dev_config);
  /** watch ipcMain文件 **/
  webpack_process_dev_compair.watch({}, (error, stats) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stats.toString({ colors: true }));
      // process_task_list.forEach((single_process_task) => single_process_task.kill());
      // process_task_list.push(spawn("electron", [process.cwd()], { stdio: "inherit" }));
    };
  });

});