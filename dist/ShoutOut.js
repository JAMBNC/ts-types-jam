import { z } from "zod";
import { ShoutOutType } from "./ShoutOutType.js";
const _ShoutOut = z
    .object({
    type: ShoutOutType,
    display: z.string(),
    url: z.string(),
    value: z.string().optional(),
})
    .passthrough();
export const ShoutOut = _ShoutOut;
