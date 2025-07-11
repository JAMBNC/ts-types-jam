import { z } from "zod";
export declare const PurchaseOptions: z.ZodObject<{
    allowsSample: z.ZodBoolean;
    customizable: z.ZodBoolean;
    customizeLeadTimeDayRange: z.ZodOptional<z.ZodString>;
    discountReason: z.ZodOptional<z.ZodString>;
    inStock: z.ZodBoolean;
    leadTime: z.ZodOptional<z.ZodString>;
    minCustomizationQty: z.ZodOptional<z.ZodNumber>;
    minSaleQty: z.ZodOptional<z.ZodNumber>;
    onSale: z.ZodOptional<z.ZodBoolean>;
    plainLeadTimeDayRange: z.ZodOptional<z.ZodString>;
    price: z.ZodNumber;
    quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
        requiredStepIncrement: z.ZodNumber;
        startingAtQty: z.ZodNumber;
    }, z.core.$strip>>>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    stockQty: z.ZodNumber;
    suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    tierPrices: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    toBeDiscontinued: z.ZodBoolean;
}, z.core.$strip>;
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
//# sourceMappingURL=PurchaseOptions.d.ts.map