import { z } from "zod";
declare const _Page: z.ZodObject<{
    height: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
    id: z.ZodString;
    ingredientsOrdered: z.ZodArray<z.ZodString>;
    restrictions: z.ZodOptional<import("./PageRestrictions.js").PageRestrictionsSchema>;
    regions: z.ZodOptional<z.ZodArray<import("./DesignRegion.js").DesignRegionSchema>>;
    view: z.ZodOptional<z.ZodString>;
    width: z.ZodOptional<import("./Dimension.js").DimensionSchema>;
}, z.core.$strict>;
type _PageSchema = typeof _Page;
export interface PageSchema extends _PageSchema {
}
/**A page in the design containing ordered references to ingredients.*/
export declare const Page: PageSchema;
export type Page = z.infer<typeof Page>;
export {};
//# sourceMappingURL=Page.d.ts.map