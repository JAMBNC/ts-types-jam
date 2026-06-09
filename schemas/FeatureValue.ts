import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { OptionUse } from "./OptionUse.js";

export const FeatureValue = z
  .object({
    type: z.literal("featureValue"),
    availableOptions: z.array(AdderCodeEnum).optional(),
    optionUse: OptionUse.optional(),
  })
  .passthrough();
export type FeatureValue = z.infer<typeof FeatureValue>;
