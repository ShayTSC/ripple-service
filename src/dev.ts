import { Logger } from "./logger";

// make TypeScript happy
declare global {
  var debugCount: number;
}

export function hotReload() {
  if (process.env.NODE_ENV !== "development") return;

  globalThis.debugCount ??= 0;
  Logger.debug(`Reloaded ${globalThis.debugCount} times`);
  globalThis.debugCount++;

  // prevent `bun run` from exiting
  setInterval(function () { }, 1000000);
}
