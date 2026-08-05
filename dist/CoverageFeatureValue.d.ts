import { z } from "zod";
declare const _CoverageFeatureValue: z.ZodObject<{
    type: z.ZodLiteral<"coverageFeatureValue">;
    availableOptions: z.ZodOptional<z.ZodArray<import("./CoverageAdderCodeEnum.js").CoverageAdderCodeEnumSchema>>;
    coverageMap: z.ZodOptional<z.ZodRecord<z.ZodString, import("./Dimension.js").DimensionSchema>>;
    optionUse: z.ZodOptional<import("./OptionUse.js").OptionUseSchema>;
}, z.core.$loose>;
type _CoverageFeatureValueSchema = typeof _CoverageFeatureValue;
export interface CoverageFeatureValueSchema extends _CoverageFeatureValueSchema {
}
export declare const CoverageFeatureValue: CoverageFeatureValueSchema;
export type CoverageFeatureValue = z.infer<typeof CoverageFeatureValue>;
export {};
//# sourceMappingURL=CoverageFeatureValue.d.ts.map