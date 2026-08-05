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
/**Price tiers keyed by product SKU.*/
export const DesignerPricing = _DesignerPricing;
