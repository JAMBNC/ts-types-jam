import { z } from "zod";
export const ReviewDetail = z.object({
    answeredQuestions: z
        .array(z.object({
        choices: z.array(z.string()),
        selected: z.array(z.string()).optional(),
        type: z.literal("Tag"),
    }))
        .optional(),
    comments: z.string().optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.any()).optional(),
    location: z.string().optional(),
    maxRating: z.number().optional(),
    media: z
        .array(z.object({
        altText: z.string().optional(),
        label: z.string().optional(),
        mediaType: z.enum(["image", "video"]),
        previewUrl: z.string().optional(),
        tags: z
            .array(z.enum([
            "primary",
            "small",
            "thumbnail",
            "yourLogoHere",
            "insideView",
            "swatch",
            "amazon",
            "carousel",
            "other",
        ]))
            .optional(),
        url: z.string(),
    }))
        .optional(),
    merchantResponses: z
        .array(z.object({
        createdAt: z.string().datetime({ offset: true }).optional(),
        identifiers: z.record(z.any()).optional(),
        location: z.string().optional(),
        nickname: z.string().optional(),
        response: z.string().optional(),
        responseType: z.literal("merchantResponse").optional(),
        updatedAt: z.string().datetime({ offset: true }).optional(),
        votes: z.record(z.number().int()).optional(),
    }))
        .optional(),
    nickname: z.string().optional(),
    rating: z.number().optional(),
    sku: z.string(),
    source: z.literal("email").optional(),
    title: z.string().optional(),
    votes: z.record(z.number().int()).optional(),
});
