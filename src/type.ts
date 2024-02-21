export interface Message {
  sessionId: string;
  type: "message" | "media" | "join" | "leave" | "terminate";
  mime?: string;
  data: string | Buffer;
}

