import { z } from "zod/v4";
export declare const PurchaseOptions: z.ZodObject<{
    allowsSample: z.ZodBoolean;
    customizable: z.ZodBoolean;
    customizeLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$strip>>;
    inStock: z.ZodBoolean;
    leadTime: z.ZodOptional<z.ZodString>;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    plainLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$strip>>;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        requiredStepIncrement: z.ZodNumber;
        startingAtQty: z.ZodNumber;
    }, z.core.$strip>>>;
    stockQty: z.ZodNumber;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    tierPrices: z.ZodArray<z.ZodObject<{
        discountReason: z.ZodOptional<z.ZodString>;
        price: z.ZodNumber;
        salePrice: z.ZodOptional<z.ZodNumber>;
        startingAtQty: z.ZodNumber;
    }, z.core.$strip>>;
    toBeDiscontinued: z.ZodBoolean;
}, z.core.$strip>;
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
//# sourceMappingURL=PurchaseOptions.d.ts.map