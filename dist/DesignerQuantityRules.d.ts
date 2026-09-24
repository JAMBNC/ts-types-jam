import { z } from "zod";
declare const _DesignerQuantityRules: z.ZodRecord<z.ZodString, import("./DesignerQuantityRule.js").DesignerQuantityRuleSchema>;
type _DesignerQuantityRulesSchema = typeof _DesignerQuantityRules;
export interface DesignerQuantityRulesSchema extends _DesignerQuantityRulesSchema {
}
/**Quantity rules key by sku, A priced line without an entry is per_base, applied up from the product base quantity.*/
export declare const DesignerQuantityRules: DesignerQuantityRulesSchema;
export type DesignerQuantityRules = z.infer<typeof DesignerQuantityRules>;
export {};
//# sourceMappingURL=DesignerQuantityRules.d.ts.map