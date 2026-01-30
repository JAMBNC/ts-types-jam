import { z } from "zod";
export const NonNegativeIntRange = z
    .object({
    max: z.number().int().gte(0).optional(),
    min: z.number().int().gte(0),
})
    .passthrough();
