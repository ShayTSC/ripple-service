# ripple-service

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Protocol

This project runs on a simple binary protocol.

### Header

The header is 64-bytes long and contains the following fields:

- `magic` (4 bytes): A magic number to identify the protocol. It is always `0xdeadbeef`.
- `version` (4 bytes): The version of the protocol. It is always `0x00000001`.
- `length` (4 bytes): The length of the payload.
- `sessionId` (4 bytes): The session ID.
- `timestamp` (8 bytes): The timestamp of the message.
- `type` (2 byte): The type of the message.
- `mime` (2 byte): The MIME type of the payload.
- `reserved` (36 bytes): Reserved for future use.

#### Type Reference

| Type        | Value    | Description                                                 |
| ----------- | -------- | ----------------------------------------------------------- |
| `Message`   | `0x0001` | A message from the client to the session channel.           |
| `Media`     | `0x0002` | A media message from the client to the session channel.     |
| `Join`      | `0x0003` | A join message from the client to the session channel.      |
| `Leave`     | `0x0004` | A leave message from the client to the session channel.     |
| `Terminate` | `0x0005` | A terminate message from the client to the session channel. |

#### MIME Reference

| MIME Type       | Value    | Description           |
| --------------- | -------- | --------------------- |
| `text/plain`    | `0x0001` | A plain text message. |
| `image/png`     | `0x0002` | A PNG image.          |
| `image/jpeg`    | `0x0003` | A JPEG image.         |
| `image/gif`     | `0x0004` | A GIF image.          |
| `image/svg+xml` | `0x0005` | An SVG image.         |
| `image/webp`    | `0x0006` | A WebP image.         |
| `image/bmp`     | `0x0007` | A BMP image.          |
| `image/heif`    | `0x0008` | A HEIF image.         |
| `image/avif`    | `0x0009` | An AVIF image.        |
| `image/tiff`    | `0x000a` | A TIFF image.         |
| `image/x-icon`  | `0x000b` | An ICO image.         |
| `audio/mp3`     | `0x000c` | An MP3 audio.         |
| `audio/wav`     | `0x000d` | A WAV audio.          |
| `audio/ogg`     | `0x000e` | An OGG audio.         |
| `video/mp4`     | `0x000f` | An MP4 video.         |
| `video/webm`    | `0x0010` | A WebM video.         |
| `video/mov`     | `0x0011` | A MOV video.          |
| `video/avi`     | `0x0012` | An AVI video.         |
| `video/mkv`     | `0x0013` | An MKV video.         |
| `video/flv`     | `0x0014` | An FLV video.         |

### Payload

The payload is a binary blob of data. The length of the payload is specified in the header.
The text message enforce a UTF-8 encoding, as the standard.