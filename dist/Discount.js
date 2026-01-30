import { z } from "zod";
export const Discount = z
    .object({
    amount: z.number().gte(0).optional(),
    code: z.string().optional(),
    description: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
})
    .passthrough();
