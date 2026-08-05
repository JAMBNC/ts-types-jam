import { z } from "zod";
const _FoilCoverageAdderCode = z.enum([
    "foil_coverage_sm",
    "foil_coverage_std",
    "foil_coverage_lg",
    "foil_coverage_xl",
]);
export const FoilCoverageAdderCode = _FoilCoverageAdderCode;
