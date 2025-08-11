import { z } from "zod/v4";
export const ProductListing = z.object({
    isCustomizable: z.boolean(),
    mainImageUrl: z.string().optional(),
    pivotValues: z.record(z.string(), z.any()).optional(),
    shortName: z.string().optional(),
    sku: z.string(),
});
