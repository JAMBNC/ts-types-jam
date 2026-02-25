import { z } from "zod";
import { FeatureValue } from "./FeatureValue.js";
import { ProcessConfigurationFeatureValue } from "./ProcessConfigurationFeatureValue.js";
import { SidedFeatureValue } from "./SidedFeatureValue.js";

export const DesignerConfigFeatureValue = z.union([
  FeatureValue,
  ProcessConfigurationFeatureValue,
  SidedFeatureValue,
]);
export type DesignerConfigFeatureValue = z.infer<
  typeof DesignerConfigFeatureValue
>;
