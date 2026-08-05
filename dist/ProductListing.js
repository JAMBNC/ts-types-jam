import { z } from "zod";
const _ProductListing = z
    .object({
    isCustomizable: z.boolean(),
    mainImageUrl: z.string().optional(),
    pivotValues: z.record(z.string(), z.any()).optional(),
    shortName: z.string().optional(),
    sku: z.string(),
})
    .passthrough();
export const ProductListing = _ProductListing;
