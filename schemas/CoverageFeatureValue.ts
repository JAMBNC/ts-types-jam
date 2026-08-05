import { z } from "zod";
import { CoverageAdderCodeEnum } from "./CoverageAdderCodeEnum.js";
import { Dimension } from "./Dimension.js";
import { OptionUse } from "./OptionUse.js";

const _CoverageFeatureValue = z
  .object({
    type: z.literal("coverageFeatureValue"),
    availableOptions: z.array(CoverageAdderCodeEnum).optional(),
    coverageMap: z.record(z.string(), Dimension).optional(),
    optionUse: OptionUse.optional(),
  })
  .passthrough();
type _CoverageFeatureValueSchema = typeof _CoverageFeatureValue;
export interface CoverageFeatureValueSchema extends _CoverageFeatureValueSchema {}
export const CoverageFeatureValue: CoverageFeatureValueSchema =
  _CoverageFeatureValue;
export type CoverageFeatureValue = z.infer<typeof CoverageFeatureValue>;
