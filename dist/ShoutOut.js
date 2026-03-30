import { z } from "zod";
import { ShoutOutType } from "./ShoutOutType.js";
export const ShoutOut = z
    .object({
    display: z.string(),
    type: ShoutOutType,
    url: z.string(),
    value: z.string().optional(),
})
    .passthrough();
