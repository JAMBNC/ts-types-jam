import { z } from "zod";
export declare const CoverageFeatureValue: z.ZodObject<{
    availableOptions: z.ZodOptional<z.ZodArray<z.ZodIntersection<z.ZodObject<{
        type: z.ZodLiteral<"coverageAdderCodeEnum">;
    }, z.core.$loose>, z.ZodUnion<readonly [z.ZodEnum<{
        foil_coverage_sm: "foil_coverage_sm";
        foil_coverage_std: "foil_coverage_std";
        foil_coverage_lg: "foil_coverage_lg";
        foil_coverage_xl: "foil_coverage_xl";
    }>, z.ZodEnum<{
        ink_coverage_sm: "ink_coverage_sm";
        ink_coverage_std: "ink_coverage_std";
    }>]>>>>;
    coverageMap: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        u: z.ZodEnum<{
            in: "in";
            mm: "mm";
            px: "px";
            pt: "pt";
        }>;
        v: z.ZodNumber;
    }, z.core.$loose>>>;
    optionUse: z.ZodOptional<z.ZodEnum<{
        selected: "selected";
        none: "none";
        all: "all";
    }>>;
    type: z.ZodLiteral<"coverageFeatureValue">;
}, z.core.$loose>;
export type CoverageFeatureValue = z.infer<typeof CoverageFeatureValue>;
//# sourceMappingURL=CoverageFeatureValue.d.ts.map