import { z } from "zod";

export const InkCoverageAdderCode = z.enum([
  "ink_coverage_sm",
  "ink_coverage_std",
]);
export type InkCoverageAdderCode = z.infer<typeof InkCoverageAdderCode>;
