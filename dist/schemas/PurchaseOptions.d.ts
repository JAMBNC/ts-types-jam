import { z } from "zod";
export declare const PurchaseOptions: z.ZodObject<{
    allowsSample: z.ZodBoolean;
    customLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$loose>>;
    customizable: z.ZodBoolean;
    designRequired: z.ZodBoolean;
    inStock: z.ZodBoolean;
    isReturnable: z.ZodDefault<z.ZodBoolean>;
    maxPrice: z.ZodNumber;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    minPrice: z.ZodNumber;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    plainLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$loose>>;
    pricePercentOff: z.ZodOptional<z.ZodNumber>;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        requiredStepIncrement: z.ZodNumber;
        startingAtQty: z.ZodNumber;
    }, z.core.$loose>>>;
    stockQty: z.ZodNumber;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    tierPrices: z.ZodArray<z.ZodObject<{
        discountReason: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        pricePercentOff: z.ZodOptional<z.ZodNumber>;
        salePrice: z.ZodOptional<z.ZodNumber>;
        startingAtQty: z.ZodNumber;
    }, z.core.$loose>>;
    toBeDiscontinued: z.ZodBoolean;
}, z.core.$loose>;
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
//# sourceMappingURL=PurchaseOptions.d.ts.map