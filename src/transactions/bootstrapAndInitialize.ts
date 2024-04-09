// import { MySQLConnectManager } from "@/classes/MySQLConnectManager";
// import { RedisConnectManager } from "@/classes/RedisConnectManager";

import { WindowMapping } from "@/classes/WindowMapping";
import { ElectronApplication } from "@/classes/ElectronApplication";
import { ApplicationConfigManager } from "@/classes/ApplicationConfigManager";

// export const redisConnectManager = new RedisConnectManager();
// export const mysqlConnectManager = new MySQLConnectManager();
export const windowMapping = new WindowMapping();
export const electronApplication = new ElectronApplication({ windowMapping });
export const applicationConfigManager = new ApplicationConfigManager();

export async function bootstrapAndInitialize() {
  await applicationConfigManager.initialize();
  await electronApplication.initialize();
  // const runtimeConfig = applicationConfigManager.getRuntimeConfig();
  // console.log("runtimeConfig", runtimeConfig);
  // await redisConnectManager.initialize(runtimeConfig.redis);
  // await mysqlConnectManager.initialize(runtimeConfig.mysql);
};