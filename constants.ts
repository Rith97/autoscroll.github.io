import { PostTarget, PostContentType } from './types';

export const TARGET_OPTIONS = [
  { value: PostTarget.PROFILE, label: "My Profile" },
  { value: PostTarget.PAGE, label: "Specific Page" },
  { value: PostTarget.GROUP, label: "Specific Group" },
];

export const POST_CONTENT_TYPE_OPTIONS = [
  { value: PostContentType.TEXT_IMAGE, label: "Text/Image Post" },
  { value: PostContentType.LONG_VIDEO, label: "Long Video" },
  { value: PostContentType.REEL, label: "Reel" },
];

export const GEMINI_TEXT_MODEL = "gemini-2.5-flash-preview-04-17";