import { nanoid } from 'nanoid';
import { hotReload } from './dev';
import { Logger } from './logger';
import { MemCache } from './memcache';
import { message } from './message-handler';

hotReload();

const Cache = new MemCache();

Logger.info("Start Bun Server...");
Bun.serve({
  fetch(req, server) {
    const url = new URL(req.url);
    if (url.pathname === "/chat") {
      console.log(`upgrade!`);
      const sessionId = nanoid();
      const success = server.upgrade(req, { data: { sessionId } });
      return success
        ? undefined
        : new Response("WebSocket upgrade error", { status: 400 });
    }

    return new Response("Hello world");
  },
  websocket: {
    message,
  },
});

export { Cache };
