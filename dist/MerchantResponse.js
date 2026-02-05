import { z } from "zod";
import { ResponseType } from "./ResponseType.js";
export const MerchantResponse = z
    .object({
    createdAt: z.string().datetime({ offset: true }).optional(),
    identifiers: z.record(z.any()).optional(),
    location: z.string().optional(),
    nickname: z.string().optional(),
    response: z.string().optional(),
    responseType: ResponseType.optional(),
    updatedAt: z.string().datetime({ offset: true }).optional(),
    votes: z.record(z.number().int()).optional(),
})
    .passthrough();
