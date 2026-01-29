import { z } from "zod";
export const PurchaseOptions = z.object({
    allowsSample: z.boolean(),
    customLeadTimeDayRange: z
        .object({
        max: z.number().int().gte(0).optional(),
        min: z.number().int().gte(0),
    })
        .optional(),
    customizable: z.boolean(),
    designRequired: z.boolean(),
    inStock: z.boolean(),
    isReturnable: z.boolean(),
    maxPrice: z.number(),
    minCustomizationQty: z.number().int().gt(0).optional(),
    minPrice: z.number(),
    minSaleQty: z.number().int().gt(0).optional(),
    onSale: z.boolean().optional(),
    plainLeadTimeDayRange: z
        .object({
        max: z.number().int().gte(0).optional(),
        min: z.number().int().gte(0),
    })
        .optional(),
    pricePercentOff: z.number().optional(),
    quantityStepIncrements: z
        .array(z.object({
        requiredStepIncrement: z.number().int(),
        startingAtQty: z.number().int(),
    }))
        .optional(),
    stockQty: z.number().int().gte(0),
    suggestedQuantityDisplays: z.array(z.number().int()).optional(),
    tierPrices: z.array(z.object({
        discountReason: z.string().optional(),
        price: z.number(),
        pricePercentOff: z.number().optional(),
        salePrice: z.number().optional(),
        startingAtQty: z.number().int(),
    })),
    toBeDiscontinued: z.boolean(),
});
