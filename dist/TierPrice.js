import { z } from "zod";
const _TierPrice = z
    .object({
    discountReason: z.string().optional(),
    price: z.number(),
    pricePercentOff: z.number().optional(),
    salePrice: z.number().optional(),
    startingAtQty: z.number().int(),
})
    .passthrough();
export const TierPrice = _TierPrice;
