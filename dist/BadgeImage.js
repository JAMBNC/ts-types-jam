import { z } from "zod";
import { BadgePosition } from "./BadgePosition.js";
import { Context } from "./Context.js";
export const BadgeImage = z
    .object({ context: Context, position: BadgePosition, url: z.string() })
    .passthrough();
