import { z } from "zod";
export const DesignerPricing = z
    .record(z.array(z.object({
    discountReason: z.string().optional(),
    price: z.number(),
    pricePercentOff: z.number().optional(),
    salePrice: z.number().optional(),
    startingAtQty: z.number().int(),
})))
    .describe("Price tiers keyed by product SKU.");
