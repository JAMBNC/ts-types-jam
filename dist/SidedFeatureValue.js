import { z } from "zod";
import { FeatureValue } from "./FeatureValue.js";
const _SidedFeatureValue = z
    .object({
    type: z.literal("sidedFeatureValue"),
    sides: z.array(FeatureValue),
})
    .passthrough();
export const SidedFeatureValue = _SidedFeatureValue;
