import { z } from "zod";
declare const _ReviewSummary: z.ZodObject<{
    displayGroupId: z.ZodOptional<z.ZodNumber>;
    maxRating: z.ZodOptional<z.ZodNumber>;
    rating: z.ZodOptional<z.ZodNumber>;
    reviewCount: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _ReviewSummarySchema = typeof _ReviewSummary;
export interface ReviewSummarySchema extends _ReviewSummarySchema {
}
export declare const ReviewSummary: ReviewSummarySchema;
export type ReviewSummary = z.infer<typeof ReviewSummary>;
export {};
//# sourceMappingURL=ReviewSummary.d.ts.map