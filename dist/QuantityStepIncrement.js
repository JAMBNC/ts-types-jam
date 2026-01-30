import { z } from "zod";
export const QuantityStepIncrement = z
    .object({
    requiredStepIncrement: z.number().int(),
    startingAtQty: z.number().int(),
})
    .passthrough();
