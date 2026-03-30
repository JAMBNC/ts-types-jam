import { z } from "zod";
export declare const CoverageAdderCodeEnum: z.ZodIntersection<z.ZodObject<{
    type: z.ZodLiteral<"coverageAdderCodeEnum">;
}, z.core.$loose>, z.ZodUnion<readonly [z.ZodEnum<{
    foil_coverage_sm: "foil_coverage_sm";
    foil_coverage_std: "foil_coverage_std";
    foil_coverage_lg: "foil_coverage_lg";
    foil_coverage_xl: "foil_coverage_xl";
}>, z.ZodEnum<{
    ink_coverage_sm: "ink_coverage_sm";
    ink_coverage_std: "ink_coverage_std";
}>]>>;
export type CoverageAdderCodeEnum = z.infer<typeof CoverageAdderCodeEnum>;
//# sourceMappingURL=CoverageAdderCodeEnum.d.ts.map