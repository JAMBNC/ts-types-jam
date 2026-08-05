import { z } from "zod";

const _InkCoverageAdderCode = z.enum(["ink_coverage_sm", "ink_coverage_std"]);
type _InkCoverageAdderCodeSchema = typeof _InkCoverageAdderCode;
export interface InkCoverageAdderCodeSchema extends _InkCoverageAdderCodeSchema {}
export const InkCoverageAdderCode: InkCoverageAdderCodeSchema =
  _InkCoverageAdderCode;
export type InkCoverageAdderCode = z.infer<typeof InkCoverageAdderCode>;
