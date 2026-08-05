import { z } from "zod";
declare const _ProcessConfigurationFeatureValue: z.ZodObject<{
    type: z.ZodLiteral<"processConfigurationFeatureValue">;
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    availableOptions: z.ZodOptional<z.ZodArray<import("./AdderCodeEnum.js").AdderCodeEnumSchema>>;
    colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    optionUse: z.ZodOptional<import("./OptionUse.js").OptionUseSchema>;
    restrictColors: z.ZodOptional<z.ZodBoolean>;
}, z.core.$loose>;
type _ProcessConfigurationFeatureValueSchema = typeof _ProcessConfigurationFeatureValue;
export interface ProcessConfigurationFeatureValueSchema extends _ProcessConfigurationFeatureValueSchema {
}
export declare const ProcessConfigurationFeatureValue: ProcessConfigurationFeatureValueSchema;
export type ProcessConfigurationFeatureValue = z.infer<typeof ProcessConfigurationFeatureValue>;
export {};
//# sourceMappingURL=ProcessConfigurationFeatureValue.d.ts.map