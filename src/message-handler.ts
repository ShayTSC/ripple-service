import type { ServerWebSocket } from "bun";
import { Cache } from ".";
import { Engine } from "./engine";

export function message(ws: ServerWebSocket<unknown>, message: Buffer) {
  if (!ws.data || !Buffer.isBuffer(message)) return;

  const decodedMessage = Engine.decode(message); 

  if (Cache.get(decodedMessage.sessionId)) {
    ws.send(Buffer.from("You are already connected"));
    return;
  }
}
