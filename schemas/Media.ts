import { z } from "zod";
import { MediaType } from "./MediaType.js";
import { Tag } from "./Tag.js";

const _Media = z
  .object({
    altText: z.string().optional(),
    label: z.string().optional(),
    mediaType: MediaType,
    previewUrl: z.string().optional(),
    tags: z.array(Tag).optional(),
    url: z.string(),
  })
  .passthrough();
type _MediaSchema = typeof _Media;
export interface MediaSchema extends _MediaSchema {}
export const Media: MediaSchema = _Media;
export type Media = z.infer<typeof Media>;
