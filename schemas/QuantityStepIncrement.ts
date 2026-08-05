import { z } from "zod";

const _QuantityStepIncrement = z
  .object({
    requiredStepIncrement: z.number().int(),
    startingAtQty: z.number().int(),
  })
  .passthrough();
type _QuantityStepIncrementSchema = typeof _QuantityStepIncrement;
export interface QuantityStepIncrementSchema extends _QuantityStepIncrementSchema {}
export const QuantityStepIncrement: QuantityStepIncrementSchema =
  _QuantityStepIncrement;
export type QuantityStepIncrement = z.infer<typeof QuantityStepIncrement>;
