import { z } from "zod";
declare const _DesignerQuantityRule: z.ZodObject<{
    rule: import("./DesignerQuantityRuleType.js").DesignerQuantityRuleTypeSchema;
    ratioToBase: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _DesignerQuantityRuleSchema = typeof _DesignerQuantityRule;
export interface DesignerQuantityRuleSchema extends _DesignerQuantityRuleSchema {
}
export declare const DesignerQuantityRule: DesignerQuantityRuleSchema;
export type DesignerQuantityRule = z.infer<typeof DesignerQuantityRule>;
export {};
//# sourceMappingURL=DesignerQuantityRule.d.ts.map