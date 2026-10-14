import { z } from "zod";
import { PageRestrictions } from "./PageRestrictions.js";
const _Page = z
    .object({
    /**Unique identifier for this page.*/
    id: z.string().describe("Unique identifier for this page."),
    /**Ordered list of ingredient IDs rendered on this page.*/
    ingredientsOrdered: z
        .array(z.string())
        .describe("Ordered list of ingredient IDs rendered on this page."),
    restrictions: PageRestrictions.optional(),
})
    .strict()
    .describe("A page in the design containing ordered references to ingredients.");
/**A page in the design containing ordered references to ingredients.*/
export const Page = _Page;
