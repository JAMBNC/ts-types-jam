import { z } from "zod";
declare const _FoilCoverageAdderCode: z.ZodEnum<{
    foil_coverage_lg: "foil_coverage_lg";
    foil_coverage_sm: "foil_coverage_sm";
    foil_coverage_std: "foil_coverage_std";
    foil_coverage_xl: "foil_coverage_xl";
}>;
type _FoilCoverageAdderCodeSchema = typeof _FoilCoverageAdderCode;
export interface FoilCoverageAdderCodeSchema extends _FoilCoverageAdderCodeSchema {
}
export declare const FoilCoverageAdderCode: FoilCoverageAdderCodeSchema;
export type FoilCoverageAdderCode = z.infer<typeof FoilCoverageAdderCode>;
export {};
//# sourceMappingURL=FoilCoverageAdderCode.d.ts.map