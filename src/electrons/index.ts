import { app, BrowserWindow } from "electron";
// import { initial_mysql_pool, get_mysql_connection } from "@/electrons/frameworks/mysql_pool_config";

app.on("ready", async () => {
  const window = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      webSecurity: false,
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: true
    }
  });
  window.loadFile("../index.html");
  window.webContents.openDevTools();
});
