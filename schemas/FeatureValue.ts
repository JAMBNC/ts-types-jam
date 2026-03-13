import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { OptionUse } from "./OptionUse.js";

export const FeatureValue = z
  .object({
    availableOptions: z.array(AdderCodeEnum).optional(),
    optionUse: OptionUse.optional(),
    type: z.literal("featureValue"),
  })
  .passthrough();
export type FeatureValue = z.infer<typeof FeatureValue>;
