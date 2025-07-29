import { z } from "zod/v4";
export declare const ProductListing: z.ZodObject<{
    isCustomizable: z.ZodBoolean;
    mainImageUrl: z.ZodOptional<z.ZodString>;
    selectionValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    shortName: z.ZodOptional<z.ZodString>;
    sku: z.ZodString;
}, z.core.$strip>;
export type ProductListing = z.infer<typeof ProductListing>;
//# sourceMappingURL=ProductListing.d.ts.map