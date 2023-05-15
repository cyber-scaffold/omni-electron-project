const path = require("path");
const spawn = require("cross-spawn");
const chokidar = require("chokidar");
const { webpack } = require("webpack");

const typescript_compair = require("./typescript_compair");
const webpack_dev_config = require("./webpack.dev.config");

(async () => {
  await typescript_compair();
  const procee_spawn_list = [];
  /** watch electrons 文件 **/
  chokidar.watch([path.resolve(__dirname, "../src/electrons/")], {
    persistent: true,
    ignoreInitial: true,
  }).on("all", async () => {
    await typescript_compair();
    procee_spawn_list.forEach((single_procee_spawn) => single_procee_spawn.kill());
    const procee_spawn = spawn("electron", [path.resolve(__dirname, "../dist/electrons/index.js")], { stdio: "inherit" });
    procee_spawn_list.push(procee_spawn);
  });

  /** 编译前端文件 **/
  const webpack_compair = webpack(webpack_dev_config);
  /** watch前端文件 **/
  webpack_compair.watch({}, (error, stats) => {
    if (error) {
      console.log(error)
    } else {
      console.log(stats.toString({ colors: true }));
      procee_spawn_list.forEach((single_procee_spawn) => single_procee_spawn.kill());
      /** 编译完成后运行electron **/
      const procee_spawn = spawn("electron", [path.resolve(__dirname, "../dist/electrons/index.js")], { stdio: "inherit" });
      procee_spawn_list.push(procee_spawn);
    };
  });
})();