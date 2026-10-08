import { z } from "zod";
const _RotateRestriction = z
    .object({
    type: z.literal("rotate"),
    /**Can the ingredient be rotated?*/
    value: z.boolean().describe("Can the ingredient be rotated?"),
})
    .strict();
export const RotateRestriction = _RotateRestriction;
