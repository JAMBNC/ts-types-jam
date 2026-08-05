import { z } from "zod";
import { BadgeImage } from "./BadgeImage.js";

const _Badge = z
  .object({
    title: z.string().optional(),
    code: z.string(),
    images: z.array(BadgeImage).optional(),
    priority: z.number().int().optional(),
  })
  .passthrough();
type _BadgeSchema = typeof _Badge;
export interface BadgeSchema extends _BadgeSchema {}
export const Badge: BadgeSchema = _Badge;
export type Badge = z.infer<typeof Badge>;
