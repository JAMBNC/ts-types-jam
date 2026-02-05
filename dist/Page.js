import { z } from "zod";
/**A page in the design containing ordered references to ingredients.*/
export const Page = z
    .object({
    /**Unique identifier for this page.*/
    id: z.string().describe("Unique identifier for this page."),
    /**Ordered list of ingredient IDs rendered on this page.*/
    ingredientsOrdered: z
        .array(z.string())
        .describe("Ordered list of ingredient IDs rendered on this page."),
})
    .strict()
    .describe("A page in the design containing ordered references to ingredients.");
