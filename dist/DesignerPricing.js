import { z } from "zod";
/**Price tiers keyed by product SKU.*/
export const DesignerPricing = z
    .record(z.array(z
    .object({
    discountReason: z.string().optional(),
    price: z.number(),
    pricePercentOff: z.number().optional(),
    salePrice: z.number().optional(),
    startingAtQty: z.number().int(),
})
    .passthrough()))
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
