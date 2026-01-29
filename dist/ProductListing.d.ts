import { z } from "zod";
export declare const ProductListing: z.ZodObject<{
    isCustomizable: z.ZodBoolean;
    mainImageUrl: z.ZodOptional<z.ZodString>;
    pivotValues: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    shortName: z.ZodOptional<z.ZodString>;
    sku: z.ZodString;
}, z.core.$strip>;
export type ProductListing = z.infer<typeof ProductListing>;
//# sourceMappingURL=ProductListing.d.ts.map