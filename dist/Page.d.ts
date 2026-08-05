import { z } from "zod";
declare const _Page: z.ZodObject<{
    id: z.ZodString;
    ingredientsOrdered: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
type _PageSchema = typeof _Page;
export interface PageSchema extends _PageSchema {
}
/**A page in the design containing ordered references to ingredients.*/
export declare const Page: PageSchema;
export type Page = z.infer<typeof Page>;
export {};
//# sourceMappingURL=Page.d.ts.map