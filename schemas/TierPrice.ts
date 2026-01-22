import { z } from "zod/v4";

export const TierPrice = z.object({
  discountReason: z.string().optional(),
  price: z.number(),
  pricePercentOff: z.number().optional(),
  salePrice: z.number().optional(),
  startingAtQty: z.number().int(),
});
export type TierPrice = z.infer<typeof TierPrice>;
