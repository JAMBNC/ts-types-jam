import { z } from "zod";
const _TranslateRestriction = z
    .object({
    type: z.literal("translate"),
    /**Can the ingredient be moved?*/
    value: z.boolean().describe("Can the ingredient be moved?"),
})
    .strict();
export const TranslateRestriction = _TranslateRestriction;
