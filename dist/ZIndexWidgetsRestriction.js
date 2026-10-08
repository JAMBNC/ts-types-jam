import { z } from "zod";
const _ZIndexWidgetsRestriction = z
    .object({
    type: z.literal("zIndexWidgets"),
    /**Are z-index widgets shown for the ingredient?*/
    value: z
        .boolean()
        .describe("Are z-index widgets shown for the ingredient?"),
})
    .strict();
export const ZIndexWidgetsRestriction = _ZIndexWidgetsRestriction;
