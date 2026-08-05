import { z } from "zod";
import { ReviewDetail } from "./ReviewDetail.js";
import { ReviewSummary } from "./ReviewSummary.js";

const _ProductReview = z
  .object({
    detail: ReviewDetail.optional(),
    summary: ReviewSummary.optional(),
  })
  .passthrough();
type _ProductReviewSchema = typeof _ProductReview;
export interface ProductReviewSchema extends _ProductReviewSchema {}
export const ProductReview: ProductReviewSchema = _ProductReview;
export type ProductReview = z.infer<typeof ProductReview>;
