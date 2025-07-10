import { z } from "zod";

export const PurchaseOptions = z.object({
  allowsSample: z.boolean(),
  customizable: z.boolean(),
  customizeLeadTimeDayRange: z.string().optional(),
  discountReason: z.string().optional(),
  inStock: z.boolean(),
  leadTime: z.string().optional(),
  minCustomizationQty: z.number().int().gt(0).optional(),
  minSaleQty: z.number().int().gt(0).optional(),
  onSale: z.boolean().optional(),
  plainLeadTimeDayRange: z.string().optional(),
  price: z.number(),
  quantityStepIncrements: z
    .array(
      z.object({
        requiredStepIncrement: z.number().int(),
        startingAtQty: z.number().int(),
      }),
    )
    .optional(),
  salePrice: z.number().optional(),
  stockQty: z.number().int().gte(0),
  suggestedQuantityDisplays: z.array(z.number().int()).optional(),
  tierPrices: z
    .array(z.object({ price: z.number(), startingAtQty: z.number().int() }))
    .optional(),
  toBeDiscontinued: z.boolean(),
});
export type PurchaseOptions = z.infer<typeof PurchaseOptions>;
