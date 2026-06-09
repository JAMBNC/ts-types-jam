import { z } from "zod";
import { BadgeImage } from "./BadgeImage.js";

export const Badge = z
  .object({
    title: z.string().optional(),
    code: z.string(),
    images: z.array(BadgeImage).optional(),
    priority: z.number().int().optional(),
  })
  .passthrough();
export type Badge = z.infer<typeof Badge>;
