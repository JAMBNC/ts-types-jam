import { z } from "zod";

/**Price tiers keyed by product SKU.*/
export const DesignerPricing = z
  .record(
    z.array(
      z
        .object({
          discountReason: z.string().optional(),
          price: z.number(),
          pricePercentOff: z.number().optional(),
          salePrice: z.number().optional(),
          startingAtQty: z.number().int(),
        })
        .passthrough(),
    ),
  )
  .describe("Price tiers keyed by product SKU.");
export type DesignerPricing = z.infer<typeof DesignerPricing>;
