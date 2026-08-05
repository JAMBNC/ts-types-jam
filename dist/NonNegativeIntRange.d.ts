import { z } from "zod";
declare const _NonNegativeIntRange: z.ZodObject<{
    max: z.ZodOptional<z.ZodNumber>;
    min: z.ZodNumber;
}, z.core.$loose>;
type _NonNegativeIntRangeSchema = typeof _NonNegativeIntRange;
export interface NonNegativeIntRangeSchema extends _NonNegativeIntRangeSchema {
}
export declare const NonNegativeIntRange: NonNegativeIntRangeSchema;
export type NonNegativeIntRange = z.infer<typeof NonNegativeIntRange>;
export {};
//# sourceMappingURL=NonNegativeIntRange.d.ts.map