import { z } from "zod";
import { TierPrice } from "./TierPrice.js";

const _DesignerPricing = z
  .record(z.string(), z.array(TierPrice))
  .superRefine((value, ctx) => {
    for (const key in value) {
      const result = z.string().describe("A product sku").safeParse(key);
      if (!result.success) {
        ctx.addIssue({
          path: [...ctx.path, key],
          code: "custom",
          message: `Invalid property name: ${key}`,
          params: {
            issues: result.error.issues,
          },
        });
      }
    }
  })
  .describe("Price tiers keyed by product SKU.");
type _DesignerPricingSchema = typeof _DesignerPricing;
export interface DesignerPricingSchema extends _DesignerPricingSchema {}
/**Price tiers keyed by product SKU.*/
export const DesignerPricing: DesignerPricingSchema = _DesignerPricing;
export type DesignerPricing = z.infer<typeof DesignerPricing>;
