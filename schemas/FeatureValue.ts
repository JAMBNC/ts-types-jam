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
type _FeatureValueSchema = typeof _FeatureValue;
export interface FeatureValueSchema extends _FeatureValueSchema {}
export const FeatureValue: FeatureValueSchema = _FeatureValue;
export type FeatureValue = z.infer<typeof FeatureValue>;
