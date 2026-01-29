import { z } from "zod";
export const ReviewSummary = z.object({
    displayGroupId: z.number().int().optional(),
    maxRating: z.number().optional(),
    rating: z.number().optional(),
    reviewCount: z.number().int().optional(),
    sku: z.string().optional(),
});
