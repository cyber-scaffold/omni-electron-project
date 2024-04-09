import { app, BrowserWindow } from "electron";
import { WindowMapping } from "@/classes/WindowMapping";

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = false;

export class ElectronApplication {

  private windowMapping: WindowMapping;

  private isFirstInstance = app.requestSingleInstanceLock();

  private async secondInstanceCallback() {
    Object.values(this.windowMapping).forEach((everyWindow: BrowserWindow) => {
      everyWindow.focus();
    });
  };

  constructor({ windowMapping }) {
    this.windowMapping = windowMapping;
  };

  public async initialize() {
    /** 当前应用没有取得进程锁的话说明重复开启,这个时候需要退出 **/
    if (!this.isFirstInstance) {
      app.quit();
      return false;
    };
    /** 如果这个时候触发了第二个实例的话需要聚焦到主窗口 **/
    app.on("second-instance", async () => {
      await this.secondInstanceCallback();
    });
    /** 窗口全部关闭的时候应用退出 **/
    app.on("window-all-closed", async () => {
      app.quit();
    });
    /** app准备好的时候渲染主窗口 **/
    return new Promise((resolve, reject) => {
      if (app.isReady()) {
        resolve(true);
        return false;
      };
      app.on("ready", () => { resolve(true) });
      app.on("render-process-gone", (error) => { reject(error) });
    });
  };

};