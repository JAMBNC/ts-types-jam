import { z } from "zod";
import { CoverageAdderCodeEnum } from "./CoverageAdderCodeEnum.js";
import { Dimension } from "./Dimension.js";
import { OptionUse } from "./OptionUse.js";

export const CoverageFeatureValue = z
  .object({
    availableOptions: z.array(CoverageAdderCodeEnum).optional(),
    coverageMap: z.record(z.string(), Dimension).optional(),
    optionUse: OptionUse.optional(),
    type: z.literal("coverageFeatureValue"),
  })
  .passthrough();
export type CoverageFeatureValue = z.infer<typeof CoverageFeatureValue>;
