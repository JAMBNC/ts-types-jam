import { z } from "zod";
export declare const PricingDataFeed: z.ZodObject<{
    sku: z.ZodString;
    generatedAt: z.ZodOptional<z.ZodString>;
    basePrice: z.ZodOptional<z.ZodNumber>;
    minPrice: z.ZodNumber;
    maxPrice: z.ZodNumber;
    compareAtPrice: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    tierPrices: z.ZodArray<z.ZodObject<{
        discountReason: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        pricePercentOff: z.ZodOptional<z.ZodNumber>;
        salePrice: z.ZodOptional<z.ZodNumber>;
        startingAtQty: z.ZodNumber;
    }, z.core.$loose>>;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        requiredStepIncrement: z.ZodNumber;
        startingAtQty: z.ZodNumber;
    }, z.core.$loose>>>;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
}, z.core.$loose>;
export type PricingDataFeed = z.infer<typeof PricingDataFeed>;
//# sourceMappingURL=PricingDataFeed.d.ts.map