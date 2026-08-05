import { z } from "zod";

const _FoilCoverageAdderCode = z.enum([
  "foil_coverage_sm",
  "foil_coverage_std",
  "foil_coverage_lg",
  "foil_coverage_xl",
]);
type _FoilCoverageAdderCodeSchema = typeof _FoilCoverageAdderCode;
export interface FoilCoverageAdderCodeSchema extends _FoilCoverageAdderCodeSchema {}
export const FoilCoverageAdderCode: FoilCoverageAdderCodeSchema =
  _FoilCoverageAdderCode;
export type FoilCoverageAdderCode = z.infer<typeof FoilCoverageAdderCode>;
