import { z } from "zod";
import { AnsweredQuestion } from "./AnsweredQuestion.js";
import { Media } from "./Media.js";
import { MerchantResponse } from "./MerchantResponse.js";
import { ReviewSource } from "./ReviewSource.js";
export const ReviewDetail = z
    .object({
    answeredQuestions: z.array(AnsweredQuestion).optional(),
    comments: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.any()).optional(),
    location: z.string().optional(),
    maxRating: z.number().optional(),
    media: z.array(Media).optional(),
    merchantResponses: z.array(MerchantResponse).optional(),
    nickname: z.string().optional(),
    rating: z.number().optional(),
    sku: z.string(),
    source: ReviewSource.optional(),
    title: z.string().optional(),
    votes: z
        .object({ helpful: z.number().int(), unhelpful: z.number().int() })
        .partial()
        .optional(),
})
    .passthrough();
