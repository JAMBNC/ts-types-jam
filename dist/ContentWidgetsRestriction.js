import { z } from "zod";
const _ContentWidgetsRestriction = z
    .object({
    type: z.literal("contentWidgets"),
    /**Are content widgets shown for the ingredient?*/
    value: z
        .boolean()
        .describe("Are content widgets shown for the ingredient?"),
})
    .strict();
export const ContentWidgetsRestriction = _ContentWidgetsRestriction;
