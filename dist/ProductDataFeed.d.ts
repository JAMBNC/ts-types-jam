import { z } from "zod";
declare const _ProductDataFeed: z.ZodObject<{
    sku: z.ZodString;
    generatedAt: z.ZodOptional<z.ZodString>;
    internalSku: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    brand: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
    browsable: z.ZodOptional<z.ZodBoolean>;
    searchable: z.ZodOptional<z.ZodBoolean>;
    content: z.ZodOptional<import("./ProductContent.js").ProductContentSchema>;
    customization: z.ZodOptional<import("./ProductCustomization.js").ProductCustomizationSchema>;
    customizable: z.ZodOptional<z.ZodBoolean>;
    designRequired: z.ZodOptional<z.ZodBoolean>;
    allowsSample: z.ZodOptional<z.ZodBoolean>;
    toBeDiscontinued: z.ZodOptional<z.ZodBoolean>;
    taxonomy: z.ZodOptional<import("./Taxonomy.js").TaxonomySchema>;
    primaryCategory: z.ZodOptional<import("./CategoryReference.js").CategoryReferenceSchema>;
    specs: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    upc: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNumber>;
    weightUnit: z.ZodOptional<z.ZodString>;
    displayGroup: z.ZodOptional<z.ZodString>;
    media: z.ZodOptional<z.ZodArray<import("./Media.js").MediaSchema>>;
    relatedSkus: z.ZodOptional<z.ZodArray<z.ZodString>>;
    crossSellSkus: z.ZodOptional<z.ZodArray<z.ZodString>>;
    upsellSkus: z.ZodOptional<z.ZodArray<z.ZodString>>;
    groupPivotValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    groupShoutOuts: z.ZodOptional<z.ZodArray<import("./ShoutOut.js").ShoutOutSchema>>;
    googleShopping: z.ZodOptional<import("./GoogleShopping.js").GoogleShoppingSchema>;
}, z.core.$loose>;
type _ProductDataFeedSchema = typeof _ProductDataFeed;
export interface ProductDataFeedSchema extends _ProductDataFeedSchema {
}
export declare const ProductDataFeed: ProductDataFeedSchema;
export type ProductDataFeed = z.infer<typeof ProductDataFeed>;
export {};
//# sourceMappingURL=ProductDataFeed.d.ts.map