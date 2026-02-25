import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { OptionUse } from "./OptionUse.js";

export const FeatureValue = z
  .object({
    available_options: z.array(AdderCodeEnum).optional(),
    option_use: OptionUse.optional(),
    type: z.literal("featureValue"),
  })
  .passthrough();
export type FeatureValue = z.infer<typeof FeatureValue>;
