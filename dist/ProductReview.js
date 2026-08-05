import { z } from "zod";
import { ReviewDetail } from "./ReviewDetail.js";
import { ReviewSummary } from "./ReviewSummary.js";
const _ProductReview = z
    .object({
    detail: ReviewDetail.optional(),
    summary: ReviewSummary.optional(),
})
    .passthrough();
export const ProductReview = _ProductReview;
