import { z } from "zod";
declare const _PricingDataFeed: z.ZodObject<{
    sku: z.ZodString;
    generatedAt: z.ZodOptional<z.ZodString>;
    basePrice: z.ZodOptional<z.ZodNumber>;
    minPrice: z.ZodNumber;
    maxPrice: z.ZodNumber;
    compareAtPrice: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    tierPrices: z.ZodArray<import("./TierPrice.js").TierPriceSchema>;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<import("./QuantityStepIncrement.js").QuantityStepIncrementSchema>>;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$loose>;
type _PricingDataFeedSchema = typeof _PricingDataFeed;
export interface PricingDataFeedSchema extends _PricingDataFeedSchema {
}
export declare const PricingDataFeed: PricingDataFeedSchema;
export type PricingDataFeed = z.infer<typeof PricingDataFeed>;
export {};
//# sourceMappingURL=PricingDataFeed.d.ts.map