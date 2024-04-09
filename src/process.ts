import { bootstrapAndInitialize, windowMapping } from "@/transactions/bootstrapAndInitialize";


setImmediate(async () => {
  await bootstrapAndInitialize();
  await windowMapping.createWindow({ windowName: "primary", routerHash: "home", debug: false });
});