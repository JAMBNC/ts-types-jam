import { z } from "zod";
export const ProductReview = z
    .object({
    detail: z
        .object({
        answeredQuestions: z
            .array(z
            .object({
            choices: z.array(z.string()),
            selected: z.array(z.string()).optional(),
            type: z.literal("Tag"),
        })
            .passthrough())
            .optional(),
        comments: z.string().optional(),
        createdAt: z.string().datetime({ offset: true }).optional(),
        identifiers: z.record(z.any()).optional(),
        location: z.string().optional(),
        maxRating: z.number().optional(),
        media: z
            .array(z
            .object({
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
        })
            .passthrough())
            .optional(),
        merchantResponses: z
            .array(z
            .object({
            createdAt: z.string().datetime({ offset: true }).optional(),
            identifiers: z.record(z.any()).optional(),
            location: z.string().optional(),
            nickname: z.string().optional(),
            response: z.string().optional(),
            responseType: z.literal("merchantResponse").optional(),
            updatedAt: z.string().datetime({ offset: true }).optional(),
            votes: z.record(z.number().int()).optional(),
        })
            .passthrough())
            .optional(),
        nickname: z.string().optional(),
        rating: z.number().optional(),
        sku: z.string(),
        source: z.literal("email").optional(),
        title: z.string().optional(),
        votes: z
            .record(z.enum(["helpful", "unhelpful"]), z.number().int())
            .optional(),
    })
        .passthrough()
        .optional(),
    summary: z
        .object({
        displayGroupId: z.number().int().optional(),
        maxRating: z.number().optional(),
        rating: z.number().optional(),
        reviewCount: z.number().int().optional(),
        sku: z.string().optional(),
    })
        .passthrough()
        .optional(),
})
    .passthrough();
