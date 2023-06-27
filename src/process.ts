import path from "path";
import { app, BrowserWindow } from "electron";
// import { initial_mysql_pool, get_mysql_connection } from "@/electrons/frameworks/mysql_pool_config";

declare var process: {
  env: {
    ELECTRON_DISABLE_SECURITY_WARNINGS: boolean;
  }
};

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = false;


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
  const html_file_path = `file://${path.join(path.dirname(__filename), "./index.html")}#/home`;
  window.loadURL(html_file_path);
  window.webContents.openDevTools();
});
