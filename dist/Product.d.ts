import { z } from "zod";
declare const _Product: z.ZodObject<{
    badges: z.ZodOptional<z.ZodArray<z.ZodString>>;
    brand: z.ZodOptional<z.ZodString>;
    browsable: z.ZodBoolean;
    content: z.ZodOptional<import("./ProductContent.js").ProductContentSchema>;
    createdAt: z.ZodOptional<z.ZodString>;
    customization: z.ZodOptional<import("./ProductCustomization.js").ProductCustomizationSchema>;
    displayGroup: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    internalSku: z.ZodOptional<z.ZodString>;
    media: z.ZodOptional<z.ZodArray<import("./Media.js").MediaSchema>>;
    name: z.ZodString;
    primaryCategory: z.ZodOptional<import("./CategoryReference.js").CategoryReferenceSchema>;
    purchaseOptions: z.ZodOptional<import("./PurchaseOptions.js").PurchaseOptionsSchema>;
    searchable: z.ZodBoolean;
    sku: z.ZodString;
    specs: z.ZodRecord<z.ZodString, z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    taxonomy: import("./Taxonomy.js").TaxonomySchema;
    upc: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    url: z.ZodArray<import("./ProductUrl.js").ProductUrlSchema>;
}, z.core.$loose>;
type _ProductSchema = typeof _Product;
export interface ProductSchema extends _ProductSchema {
}
export declare const Product: ProductSchema;
export type Product = z.infer<typeof Product>;
export {};
//# sourceMappingURL=Product.d.ts.map