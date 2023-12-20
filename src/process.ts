import path from "path";
import { app, BrowserWindow } from "electron";
// import { initial_mysql_pool, get_mysql_connection } from "@/electrons/frameworks/mysql_pool_config";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = false;

let mainWindow;

const isFirstInstance = app.requestSingleInstanceLock()

if (!isFirstInstance) {
  /** 当前应用没有取得进程锁的话说明重复开启,这个时候需要退出 **/
  app.quit();
} else {
  /** 如果这个时候触发了第二个实例的话需要聚焦到主窗口 **/
  app.on("second-instance", (event, commanLine, workingDirectory) => {
    if (mainWindow) {
      mainWindow.focus();
    };
  });

  app.on("window-all-closed", () => app.quit());

  app.on("ready", async () => {
    const window = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        webSecurity: true,
        nodeIntegration: true,
        contextIsolation: false,
        nodeIntegrationInWorker: true,
        preload: path.resolve(app.getAppPath(), "./preload.js")
      }
    });
    const html_file_path = `file://${path.join(path.dirname(__filename), "./application/index.html")}#/home`;
    window.loadURL(html_file_path);
    window.webContents.openDevTools();
  });
};
