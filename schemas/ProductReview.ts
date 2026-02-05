import { z } from "zod";
import { ReviewDetail } from "./ReviewDetail.js";
import { ReviewSummary } from "./ReviewSummary.js";

export const ProductReview = z
  .object({
    detail: ReviewDetail.optional(),
    summary: ReviewSummary.optional(),
  })
  .passthrough();
export type ProductReview = z.infer<typeof ProductReview>;
