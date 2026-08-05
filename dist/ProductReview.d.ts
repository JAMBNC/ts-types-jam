import { z } from "zod";
declare const _ProductReview: z.ZodObject<{
    detail: z.ZodOptional<import("./ReviewDetail.js").ReviewDetailSchema>;
    summary: z.ZodOptional<import("./ReviewSummary.js").ReviewSummarySchema>;
}, z.core.$loose>;
type _ProductReviewSchema = typeof _ProductReview;
export interface ProductReviewSchema extends _ProductReviewSchema {
}
export declare const ProductReview: ProductReviewSchema;
export type ProductReview = z.infer<typeof ProductReview>;
export {};
//# sourceMappingURL=ProductReview.d.ts.map