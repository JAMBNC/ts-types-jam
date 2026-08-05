import { z } from "zod";
import { PositionType } from "./PositionType.js";
const _ContentPlacement = z
    .object({
    type: z.string().optional(),
    side: z.string().optional(),
    x: z.string().optional(),
    xType: PositionType.optional(),
    y: z.string().optional(),
    yType: PositionType.optional(),
})
    .passthrough();
export const ContentPlacement = _ContentPlacement;
