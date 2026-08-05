import { z } from "zod";
import { BadgePosition } from "./BadgePosition.js";
import { Context } from "./Context.js";

const _BadgeImage = z
  .object({ context: Context, position: BadgePosition, url: z.string() })
  .passthrough();
type _BadgeImageSchema = typeof _BadgeImage;
export interface BadgeImageSchema extends _BadgeImageSchema {}
export const BadgeImage: BadgeImageSchema = _BadgeImage;
export type BadgeImage = z.infer<typeof BadgeImage>;
