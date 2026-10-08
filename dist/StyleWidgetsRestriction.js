import { z } from "zod";
const _StyleWidgetsRestriction = z
    .object({
    type: z.literal("styleWidgets"),
    /**Are style widgets shown for the ingredient?*/
    value: z.boolean().describe("Are style widgets shown for the ingredient?"),
})
    .strict();
export const StyleWidgetsRestriction = _StyleWidgetsRestriction;
