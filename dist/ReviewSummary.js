import { z } from "zod";
const _ReviewSummary = z
    .object({
    displayGroupId: z.number().int().optional(),
    maxRating: z.number().optional(),
    rating: z.number().optional(),
    reviewCount: z.number().int().optional(),
    sku: z.string().optional(),
})
    .passthrough();
export const ReviewSummary = _ReviewSummary;
