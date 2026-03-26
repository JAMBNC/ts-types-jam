import { z } from "zod";
import { PositionType } from "./PositionType.js";
export const ContentPlacement = z
    .object({
    side: z.string().optional(),
    type: z.string().optional(),
    x: z.string().optional(),
    xType: PositionType.optional(),
    y: z.string().optional(),
    yType: PositionType.optional(),
})
    .passthrough();
