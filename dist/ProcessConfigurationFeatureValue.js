import { z } from "zod";
import { AdderCodeEnum } from "./AdderCodeEnum.js";
import { OptionUse } from "./OptionUse.js";
export const ProcessConfigurationFeatureValue = z
    .object({
    allowBackgroundColor: z.boolean().optional(),
    allowCustomColors: z.boolean().optional(),
    availableOptions: z.array(AdderCodeEnum).optional(),
    colors: z.array(z.string().uuid()).optional(),
    optionUse: OptionUse.optional(),
    restrictColors: z.boolean().optional(),
    type: z.literal("processConfigurationFeatureValue"),
})
    .passthrough();
