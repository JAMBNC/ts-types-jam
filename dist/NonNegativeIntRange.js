import { z } from "zod";
const _NonNegativeIntRange = z
    .object({
    max: z.number().int().gte(0).optional(),
    min: z.number().int().gte(0),
})
    .passthrough();
export const NonNegativeIntRange = _NonNegativeIntRange;
