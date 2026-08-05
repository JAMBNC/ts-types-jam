import { z } from "zod";
const _Discount = z
    .object({
    description: z.string().optional(),
    amount: z.number().gte(0).optional(),
    code: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
})
    .passthrough();
export const Discount = _Discount;
