import { z } from "zod";
/**A page in the design containing ordered references to ingredients.*/
export declare const Page: z.ZodObject<{
    id: z.ZodString;
    ingredientsOrdered: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type Page = z.infer<typeof Page>;
//# sourceMappingURL=Page.d.ts.map