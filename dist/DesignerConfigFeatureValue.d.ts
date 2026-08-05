import { z } from "zod";
declare const _DesignerConfigFeatureValue: z.ZodUnion<readonly [import("./CoverageFeatureValue.js").CoverageFeatureValueSchema, import("./FeatureValue.js").FeatureValueSchema, import("./ProcessConfigurationFeatureValue.js").ProcessConfigurationFeatureValueSchema, import("./SidedFeatureValue.js").SidedFeatureValueSchema]>;
type _DesignerConfigFeatureValueSchema = typeof _DesignerConfigFeatureValue;
export interface DesignerConfigFeatureValueSchema extends _DesignerConfigFeatureValueSchema {
}
export declare const DesignerConfigFeatureValue: DesignerConfigFeatureValueSchema;
export type DesignerConfigFeatureValue = z.infer<typeof DesignerConfigFeatureValue>;
export {};
//# sourceMappingURL=DesignerConfigFeatureValue.d.ts.map