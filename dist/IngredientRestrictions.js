import { z } from "zod";
const _IngredientRestrictions = z
    .object({
    /**Pins the ingredient to the top or bottom of the stacking order.*/
    zIndex: z
        .enum(["top", "bottom"])
        .describe("Pins the ingredient to the top or bottom of the stacking order.")
        .optional(),
    /**Can the ingredient be selected?*/
    select: z.boolean().describe("Can the ingredient be selected?").optional(),
    /**Can the ingredient be scaled?*/
    scale: z.boolean().describe("Can the ingredient be scaled?").optional(),
    /**Can the ingredient be moved?*/
    translate: z.boolean().describe("Can the ingredient be moved?").optional(),
    /**Can the ingredient be rotated?*/
    rotate: z.boolean().describe("Can the ingredient be rotated?").optional(),
    /**Are transform widgets shown for the ingredient?*/
    transformWidgets: z
        .boolean()
        .describe("Are transform widgets shown for the ingredient?")
        .optional(),
    /**Are z-index widgets shown for the ingredient?*/
    zIndexWidgets: z
        .boolean()
        .describe("Are z-index widgets shown for the ingredient?")
        .optional(),
    /**Are content widgets shown for the ingredient?*/
    contentWidgets: z
        .boolean()
        .describe("Are content widgets shown for the ingredient?")
        .optional(),
    /**Are style widgets shown for the ingredient?*/
    styleWidgets: z
        .boolean()
        .describe("Are style widgets shown for the ingredient?")
        .optional(),
    /**Can the ingredient be deleted?*/
    delete: z.boolean().describe("Can the ingredient be deleted?").optional(),
})
    .strict();
export const IngredientRestrictions = _IngredientRestrictions;
