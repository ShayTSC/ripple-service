import { Logger } from "./logger";

// make TypeScript happy
declare global {
  var count: number;
}

export function hotReload() {
  if (process.env.NODE_ENV !== "development") return;

  globalThis.count ??= 0;
  Logger.debug(`Reloaded ${globalThis.count} times`);
  globalThis.count++;

  // prevent `bun run` from exiting
  setInterval(function () { }, 1000000);
}
