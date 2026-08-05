import { z } from "zod";
import { FoilCoverageAdderCode } from "./FoilCoverageAdderCode.js";
import { InkCoverageAdderCode } from "./InkCoverageAdderCode.js";

const _CoverageAdderCodeEnum = z
  .object({ type: z.literal("coverageAdderCodeEnum") })
  .passthrough()
  .and(z.union([FoilCoverageAdderCode, InkCoverageAdderCode]));
type _CoverageAdderCodeEnumSchema = typeof _CoverageAdderCodeEnum;
export interface CoverageAdderCodeEnumSchema extends _CoverageAdderCodeEnumSchema {}
export const CoverageAdderCodeEnum: CoverageAdderCodeEnumSchema =
  _CoverageAdderCodeEnum;
export type CoverageAdderCodeEnum = z.infer<typeof CoverageAdderCodeEnum>;
