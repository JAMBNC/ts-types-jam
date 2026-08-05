import { z } from "zod";
const _InkCoverageAdderCode = z.enum(["ink_coverage_sm", "ink_coverage_std"]);
export const InkCoverageAdderCode = _InkCoverageAdderCode;
