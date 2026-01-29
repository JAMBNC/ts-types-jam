import { z } from "zod";
export declare const ReviewDetail: z.ZodObject<{
    answeredQuestions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        choices: z.ZodArray<z.ZodString>;
        selected: z.ZodOptional<z.ZodArray<z.ZodString>>;
        type: z.ZodLiteral<"Tag">;
    }, z.core.$strip>>>;
    comments: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    location: z.ZodOptional<z.ZodString>;
    maxRating: z.ZodOptional<z.ZodNumber>;
    media: z.ZodOptional<z.ZodArray<z.ZodObject<{
        altText: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        mediaType: z.ZodEnum<{
            image: "image";
            video: "video";
        }>;
        previewUrl: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
            primary: "primary";
            small: "small";
            thumbnail: "thumbnail";
            yourLogoHere: "yourLogoHere";
            insideView: "insideView";
            swatch: "swatch";
            amazon: "amazon";
            carousel: "carousel";
            other: "other";
        }>>>;
        url: z.ZodString;
    }, z.core.$strip>>>;
    merchantResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        location: z.ZodOptional<z.ZodString>;
        nickname: z.ZodOptional<z.ZodString>;
        response: z.ZodOptional<z.ZodString>;
        responseType: z.ZodOptional<z.ZodLiteral<"merchantResponse">>;
        updatedAt: z.ZodOptional<z.ZodString>;
        votes: z.ZodOptional<z.ZodRecord<z.ZodNumber, z.core.SomeType>>;
    }, z.core.$strip>>>;
    nickname: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodNumber>;
    sku: z.ZodString;
    source: z.ZodOptional<z.ZodLiteral<"email">>;
    title: z.ZodOptional<z.ZodString>;
    votes: z.ZodOptional<z.ZodRecord<z.ZodNumber, z.core.SomeType>>;
}, z.core.$strip>;
export type ReviewDetail = z.infer<typeof ReviewDetail>;
//# sourceMappingURL=ReviewDetail.d.ts.map