import { z } from "zod";
import { BadgePosition } from "./BadgePosition.js";
import { Context } from "./Context.js";
const _BadgeImage = z
    .object({ context: Context, position: BadgePosition, url: z.string() })
    .passthrough();
export const BadgeImage = _BadgeImage;
