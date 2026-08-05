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
type _ReviewSummarySchema = typeof _ReviewSummary;
export interface ReviewSummarySchema extends _ReviewSummarySchema {}
export const ReviewSummary: ReviewSummarySchema = _ReviewSummary;
export type ReviewSummary = z.infer<typeof ReviewSummary>;
