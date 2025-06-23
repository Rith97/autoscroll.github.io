export enum PostTarget {
  PROFILE = "PROFILE",
  PAGE = "PAGE",
  GROUP = "GROUP",
}

export enum PostContentType {
  TEXT_IMAGE = "TEXT_IMAGE",
  LONG_VIDEO = "LONG_VIDEO",
  REEL = "REEL",
}

export interface PostDetails {
  email?: string;
  password?: string; // Note: Storing/handling passwords directly is a security risk.
  message: string;
  target: PostTarget;
  targetUrl?: string;
  mediaFile?: { name: string; type: string; size: number }; // Generic media file metadata
  proxy?: string;
  scheduleTime: string; // HH:MM format
  postContentType: PostContentType;
}

export interface GroundingChunkWeb {
  uri: string;
  title: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
  // Other types of chunks can be added here if needed
}

export interface GroundingMetadata {
  groundingChunks?: GroundingChunk[];
  // other grounding metadata fields
}

// Ensure process.env.API_KEY can be accessed
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY?: string;
    }
  }
}