import { z } from "zod";

const _Tag = z.enum([
  "primary",
  "small",
  "thumbnail",
  "yourLogoHere",
  "insideView",
  "swatch",
  "amazon",
  "carousel",
  "other",
]);
type _TagSchema = typeof _Tag;
export interface TagSchema extends _TagSchema {}
export const Tag: TagSchema = _Tag;
export type Tag = z.infer<typeof Tag>;
