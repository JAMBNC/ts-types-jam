import { z } from "zod";
const _ZIndexRestriction = z
    .object({
    type: z.literal("zIndex"),
    /**Pins the ingredient to the top or bottom of the stacking order.*/
    value: z
        .enum(["top", "bottom"])
        .describe("Pins the ingredient to the top or bottom of the stacking order."),
})
    .strict();
export const ZIndexRestriction = _ZIndexRestriction;
