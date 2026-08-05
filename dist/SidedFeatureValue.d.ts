import { z } from "zod";
declare const _SidedFeatureValue: z.ZodObject<{
    type: z.ZodLiteral<"sidedFeatureValue">;
    sides: z.ZodArray<import("./FeatureValue.js").FeatureValueSchema>;
}, z.core.$loose>;
type _SidedFeatureValueSchema = typeof _SidedFeatureValue;
export interface SidedFeatureValueSchema extends _SidedFeatureValueSchema {
}
export declare const SidedFeatureValue: SidedFeatureValueSchema;
export type SidedFeatureValue = z.infer<typeof SidedFeatureValue>;
export {};
//# sourceMappingURL=SidedFeatureValue.d.ts.map