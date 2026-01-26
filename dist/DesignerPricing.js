import { z } from "zod/v4";
export const DesignerPricing = z
    .record(z.string(), z.array(z.object({
    discountReason: z.string().optional(),
    price: z.number(),
    pricePercentOff: z.number().optional(),
    salePrice: z.number().optional(),
    startingAtQty: z.number().int(),
})))
    .describe("Price tiers keyed by product SKU.");
