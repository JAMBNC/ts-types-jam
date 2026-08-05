import { z } from "zod";
import { AnsweredQuestion } from "./AnsweredQuestion.js";
import { Media } from "./Media.js";
import { MerchantResponse } from "./MerchantResponse.js";
import { ReviewSource } from "./ReviewSource.js";
import { VoteType } from "./VoteType.js";

const _ReviewDetail = z
  .object({
    title: z.string().optional(),
    answeredQuestions: z.array(AnsweredQuestion).optional(),
    comments: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
    location: z.string().optional(),
    maxRating: z.number().optional(),
    media: z.array(Media).optional(),
    merchantResponses: z.array(MerchantResponse).optional(),
    nickname: z.string().optional(),
    rating: z.number().optional(),
    sku: z.string(),
    source: ReviewSource.optional(),
    votes: z
      .object({ helpful: z.number().int(), unhelpful: z.number().int() })
      .partial()
      .optional(),
  })
  .passthrough();
type _ReviewDetailSchema = typeof _ReviewDetail;
export interface ReviewDetailSchema extends _ReviewDetailSchema {}
export const ReviewDetail: ReviewDetailSchema = _ReviewDetail;
export type ReviewDetail = z.infer<typeof ReviewDetail>;
