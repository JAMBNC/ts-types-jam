import { z } from "zod";
declare const _FeatureValue: z.ZodObject<{
    type: z.ZodLiteral<"featureValue">;
    availableOptions: z.ZodOptional<z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>>;
    optionUse: z.ZodOptional<import("./OptionUse.js").OptionUseSchema>;
    required: z.ZodOptional<z.ZodBoolean>;
}, z.core.$loose>;
type _FeatureValueSchema = typeof _FeatureValue;
export interface FeatureValueSchema extends _FeatureValueSchema {
}
export declare const FeatureValue: FeatureValueSchema;
export type FeatureValue = z.infer<typeof FeatureValue>;
export {};
//# sourceMappingURL=FeatureValue.d.ts.map