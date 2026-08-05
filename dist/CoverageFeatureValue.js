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
export const CoverageFeatureValue = _CoverageFeatureValue;
