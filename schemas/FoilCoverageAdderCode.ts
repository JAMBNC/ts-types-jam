import { z } from "zod";

export const FoilCoverageAdderCode = z.enum([
  "foil_coverage_sm",
  "foil_coverage_std",
  "foil_coverage_lg",
  "foil_coverage_xl",
]);
export type FoilCoverageAdderCode = z.infer<typeof FoilCoverageAdderCode>;
