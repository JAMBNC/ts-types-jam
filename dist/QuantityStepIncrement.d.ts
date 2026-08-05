import { z } from "zod";
declare const _QuantityStepIncrement: z.ZodObject<{
    requiredStepIncrement: z.ZodNumber;
    startingAtQty: z.ZodNumber;
}, z.core.$loose>;
type _QuantityStepIncrementSchema = typeof _QuantityStepIncrement;
export interface QuantityStepIncrementSchema extends _QuantityStepIncrementSchema {
}
export declare const QuantityStepIncrement: QuantityStepIncrementSchema;
export type QuantityStepIncrement = z.infer<typeof QuantityStepIncrement>;
export {};
//# sourceMappingURL=QuantityStepIncrement.d.ts.map