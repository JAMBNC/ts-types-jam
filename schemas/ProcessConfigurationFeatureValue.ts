import { z } from "zod";
import { FrameTypeAdderCode } from "./FrameTypeAdderCode.js";
import { OptionUse } from "./OptionUse.js";

export const ProcessConfigurationFeatureValue = z
  .object({
    allowBackgroundColor: z.boolean().optional(),
    allowCustomColors: z.boolean().optional(),
    available_options: z.array(FrameTypeAdderCode).optional(),
    colors: z.array(z.string()).optional(),
    option_use: OptionUse.optional(),
    restrictColors: z.boolean().optional(),
    type: z.literal("processConfigurationFeatureValue"),
  })
  .passthrough();
export type ProcessConfigurationFeatureValue = z.infer<
  typeof ProcessConfigurationFeatureValue
>;
