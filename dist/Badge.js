import { z } from "zod";
import { BadgeImage } from "./BadgeImage.js";
export const Badge = z
    .object({
    code: z.string(),
    images: z.array(BadgeImage).optional(),
    priority: z.number().int().optional(),
    title: z.string().optional(),
})
    .passthrough();
