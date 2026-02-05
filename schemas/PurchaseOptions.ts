import { z } from "zod";
import { NonNegativeIntRange } from "./NonNegativeIntRange.js";
import { QuantityStepIncrement } from "./QuantityStepIncrement.js";
import { TierPrice } from "./TierPrice.js";

export const PurchaseOptions = z
  .object({
    allowsSample: z.boolean(),
    customLeadTimeDayRange: NonNegativeIntRange.optional(),
    customizable: z.boolean(),
    designRequired: z.boolean(),
    inStock: z.boolean(),
    isReturnable: z.boolean(),
    maxPrice: z.number(),
    minCustomizationQty: z.number().int().gt(0).optional(),
    minPrice: z.number(),
    minSaleQty: z.number().int().gt(0).optional(),
    onSale: z.boolean().optional(),
    plainLeadTimeDayRange: NonNegativeIntRange.optional(),
    pricePercentOff: z.number().optional(),
    quantityStepIncrements: z.array(QuantityStepIncrement).optional(),
    stockQty: z.number().int().gte(0),
    suggestedQuantityDisplays: z.array(z.number().int()).optional(),
    tierPrices: z.array(TierPrice),
    toBeDiscontinued: z.boolean(),
  })
  .passthrough();
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
