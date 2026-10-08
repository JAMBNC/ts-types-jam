import { z } from "zod";
const _TransformWidgetsRestriction = z
    .object({
    type: z.literal("transformWidgets"),
    /**Are transform widgets shown for the ingredient?*/
    value: z
        .boolean()
        .describe("Are transform widgets shown for the ingredient?"),
})
    .strict();
export const TransformWidgetsRestriction = _TransformWidgetsRestriction;
