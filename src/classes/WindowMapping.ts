import path from "path";
import { app, BrowserWindow } from "electron";

export class WindowMapping {

  public windowMapping = {};

  private staticFile = path.resolve(app.getAppPath(), "./dist/index.html")

  async createWindow({ windowName, routerHash, debug = true }) {
    const primaryWindow = new BrowserWindow({
      width: 1920,
      height: 1080,
      webPreferences: {
        webSecurity: true,
        nodeIntegration: true,
        contextIsolation: false,
        nodeIntegrationInWorker: true,
        preload: path.resolve(app.getAppPath(), "./dist/preload.js")
      }
    });
    this.windowMapping[windowName] = primaryWindow;
    await this.windowMapping[windowName].loadFile(this.staticFile, { hash: routerHash });
    if (debug) {
      await this.windowMapping[windowName].webContents.openDevTools();
    };
  };

  getWindowByName(windowName) {
    return this.windowMapping[windowName];
  };

};