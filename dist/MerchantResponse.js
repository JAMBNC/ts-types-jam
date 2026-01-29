import { z } from "zod";
export const MerchantResponse = z.object({
    createdAt: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.any()).optional(),
    location: z.string().optional(),
    nickname: z.string().optional(),
    response: z.string().optional(),
    responseType: z.literal("merchantResponse").optional(),
    updatedAt: z.string().datetime({ offset: true }).optional(),
    votes: z.record(z.number().int()).optional(),
});
