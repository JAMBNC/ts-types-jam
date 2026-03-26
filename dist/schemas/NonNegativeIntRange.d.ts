import { z } from "zod";
export declare const NonNegativeIntRange: z.ZodObject<{
    max: z.ZodOptional<z.ZodNumber>;
    min: z.ZodNumber;
}, z.core.$loose>;
export type NonNegativeIntRange = z.infer<typeof NonNegativeIntRange>;
//# sourceMappingURL=NonNegativeIntRange.d.ts.map