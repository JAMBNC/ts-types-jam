import { z } from "zod";
declare const _ProductListing: z.ZodObject<{
    isCustomizable: z.ZodBoolean;
    mainImageUrl: z.ZodOptional<z.ZodString>;
    pivotValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    shortName: z.ZodOptional<z.ZodString>;
    sku: z.ZodString;
}, z.core.$loose>;
type _ProductListingSchema = typeof _ProductListing;
export interface ProductListingSchema extends _ProductListingSchema {
}
export declare const ProductListing: ProductListingSchema;
export type ProductListing = z.infer<typeof ProductListing>;
export {};
//# sourceMappingURL=ProductListing.d.ts.map