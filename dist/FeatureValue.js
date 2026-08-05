import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { OptionUse } from "./OptionUse.js";
const _FeatureValue = z
    .object({
    type: z.literal("featureValue"),
    availableOptions: z.array(AdderCodeEnum).optional(),
    optionUse: OptionUse.optional(),
    required: z.boolean().optional(),
})
    .passthrough();
export const FeatureValue = _FeatureValue;
