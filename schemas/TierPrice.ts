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
type _TierPriceSchema = typeof _TierPrice;
export interface TierPriceSchema extends _TierPriceSchema {}
export const TierPrice: TierPriceSchema = _TierPrice;
export type TierPrice = z.infer<typeof TierPrice>;
