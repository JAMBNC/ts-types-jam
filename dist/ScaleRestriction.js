import { z } from "zod";
const _ScaleRestriction = z
    .object({
    type: z.literal("scale"),
    /**Can the ingredient be scaled?*/
    value: z.boolean().describe("Can the ingredient be scaled?"),
})
    .strict();
export const ScaleRestriction = _ScaleRestriction;
