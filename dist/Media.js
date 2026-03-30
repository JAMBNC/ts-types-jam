import { z } from "zod";
import { MediaType } from "./MediaType.js";
import { Tag } from "./Tag.js";
export const Media = z
    .object({
    altText: z.string().optional(),
    label: z.string().optional(),
    mediaType: MediaType,
    previewUrl: z.string().optional(),
    tags: z.array(Tag).optional(),
    url: z.string(),
})
    .passthrough();
