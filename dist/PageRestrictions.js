import { z } from "zod";
const _PageRestrictions = z
    .object({
    /**If true, new ingredients can't be added to the page.*/
    denyNewIngredients: z
        .boolean()
        .describe("If true, new ingredients can't be added to the page.")
        .optional(),
})
    .strict();
export const PageRestrictions = _PageRestrictions;
