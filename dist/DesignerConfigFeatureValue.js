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
export const DesignerConfigFeatureValue = _DesignerConfigFeatureValue;
