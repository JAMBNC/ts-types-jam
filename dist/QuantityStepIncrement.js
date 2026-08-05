import { z } from "zod";
const _QuantityStepIncrement = z
    .object({
    requiredStepIncrement: z.number().int(),
    startingAtQty: z.number().int(),
})
    .passthrough();
export const QuantityStepIncrement = _QuantityStepIncrement;
