import { z } from "zod";
import { FeatureValue } from "./FeatureValue.js";

const _SidedFeatureValue = z
  .object({
    type: z.literal("sidedFeatureValue"),
    sides: z.array(FeatureValue),
  })
  .passthrough();
type _SidedFeatureValueSchema = typeof _SidedFeatureValue;
export interface SidedFeatureValueSchema extends _SidedFeatureValueSchema {}
export const SidedFeatureValue: SidedFeatureValueSchema = _SidedFeatureValue;
export type SidedFeatureValue = z.infer<typeof SidedFeatureValue>;
