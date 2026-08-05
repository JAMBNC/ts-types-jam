import { z } from "zod";
declare const _PurchaseOptions: z.ZodObject<{
    allowsSample: z.ZodBoolean;
    customLeadTimeDayRange: z.ZodOptional<import("./NonNegativeIntRange.js").NonNegativeIntRangeSchema>;
    customizable: z.ZodBoolean;
    defaultDisplayQty: z.ZodOptional<z.ZodNumber>;
    designRequired: z.ZodBoolean;
    inStock: z.ZodBoolean;
    isReturnable: z.ZodDefault<z.ZodBoolean>;
    maxPrice: z.ZodNumber;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    minPrice: z.ZodNumber;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    plainLeadTimeDayRange: z.ZodOptional<import("./NonNegativeIntRange.js").NonNegativeIntRangeSchema>;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<import("./QuantityStepIncrement.js").QuantityStepIncrementSchema>>;
    stockQty: z.ZodNumber;
    strikeThroughQty: z.ZodOptional<z.ZodNumber>;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    tierPrices: z.ZodArray<import("./TierPrice.js").TierPriceSchema>;
    toBeDiscontinued: z.ZodBoolean;
}, z.core.$loose>;
type _PurchaseOptionsSchema = typeof _PurchaseOptions;
export interface PurchaseOptionsSchema extends _PurchaseOptionsSchema {
}
export declare const PurchaseOptions: PurchaseOptionsSchema;
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
export {};
//# sourceMappingURL=PurchaseOptions.d.ts.map