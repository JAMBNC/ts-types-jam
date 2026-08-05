import { z } from "zod";
import { CoverageFeatureValue } from "./CoverageFeatureValue.js";
import { FeatureValue } from "./FeatureValue.js";
import { ProcessConfigurationFeatureValue } from "./ProcessConfigurationFeatureValue.js";
import { SidedFeatureValue } from "./SidedFeatureValue.js";

const _DesignerConfigFeatureValue = z.union([
  CoverageFeatureValue,
  FeatureValue,
  ProcessConfigurationFeatureValue,
  SidedFeatureValue,
]);
type _DesignerConfigFeatureValueSchema = typeof _DesignerConfigFeatureValue;
export interface DesignerConfigFeatureValueSchema extends _DesignerConfigFeatureValueSchema {}
export const DesignerConfigFeatureValue: DesignerConfigFeatureValueSchema =
  _DesignerConfigFeatureValue;
export type DesignerConfigFeatureValue = z.infer<
  typeof DesignerConfigFeatureValue
>;
