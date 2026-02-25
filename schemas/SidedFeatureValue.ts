import { z } from "zod";
import { FeatureValue } from "./FeatureValue.js";

export const SidedFeatureValue = z
  .object({
    sides: z.array(FeatureValue),
    type: z.literal("sidedFeatureValue"),
  })
  .passthrough();
export type SidedFeatureValue = z.infer<typeof SidedFeatureValue>;
