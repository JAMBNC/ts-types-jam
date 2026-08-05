import { z } from "zod";
declare const _ReviewDetail: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    answeredQuestions: z.ZodOptional<z.ZodArray<import("./AnsweredQuestion.js").AnsweredQuestionSchema>>;
    comments: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    location: z.ZodOptional<z.ZodString>;
    maxRating: z.ZodOptional<z.ZodNumber>;
    media: z.ZodOptional<z.ZodArray<import("./Media.js").MediaSchema>>;
    merchantResponses: z.ZodOptional<z.ZodArray<import("./MerchantResponse.js").MerchantResponseSchema>>;
    nickname: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodString;
    source: z.ZodOptional<import("./ReviewSource.js").ReviewSourceSchema>;
    votes: z.ZodOptional<z.ZodObject<{
        helpful: z.ZodOptional<z.ZodNumber>;
        unhelpful: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
}, z.core.$loose>;
type _ReviewDetailSchema = typeof _ReviewDetail;
export interface ReviewDetailSchema extends _ReviewDetailSchema {
}
export declare const ReviewDetail: ReviewDetailSchema;
export type ReviewDetail = z.infer<typeof ReviewDetail>;
export {};
//# sourceMappingURL=ReviewDetail.d.ts.map