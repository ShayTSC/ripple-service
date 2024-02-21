/**
 * This is a binary engine that can encode and decode messages
 * The detail reference of protocol definition can be find in README.md#Protocol
 */

import type { Message } from "./type";

class Engine {
  static encode(message: Message): Buffer {
    console.log('encode');

    return Buffer.from('');
  }

  static decode(buffer: Buffer): Message {
    console.log('decode');

    return {
      sessionId: '',
      type: 'message',
      data: Buffer.from(''),
    }
  }
}

export { Engine };
