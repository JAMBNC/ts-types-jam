import { z } from "zod";
import { FeatureValue } from "./FeatureValue.js";
export const SidedFeatureValue = z
    .object({
    type: z.literal("sidedFeatureValue"),
    sides: z.array(FeatureValue),
})
    .passthrough();
