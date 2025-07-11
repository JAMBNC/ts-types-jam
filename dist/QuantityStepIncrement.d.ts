import { z } from "zod";
export declare const QuantityStepIncrement: z.ZodObject<{
    requiredStepIncrement: z.ZodNumber;
    startingAtQty: z.ZodNumber;
}, z.core.$strip>;
export type QuantityStepIncrement = z.infer<typeof QuantityStepIncrement>;
//# sourceMappingURL=QuantityStepIncrement.d.ts.map