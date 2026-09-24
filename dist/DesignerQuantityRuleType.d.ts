import { z } from "zod";
declare const _DesignerQuantityRuleType: z.ZodEnum<{
    one_time: "one_time";
    per_base: "per_base";
    per_n_base: "per_n_base";
}>;
type _DesignerQuantityRuleTypeSchema = typeof _DesignerQuantityRuleType;
export interface DesignerQuantityRuleTypeSchema extends _DesignerQuantityRuleTypeSchema {
}
/**How a priced line's quantity derives from the base product quantity. per_base=same as the base quantity. per_n_base=ceil(base quantity / ratioToBase). one_time=always 1.*/
export declare const DesignerQuantityRuleType: DesignerQuantityRuleTypeSchema;
export type DesignerQuantityRuleType = z.infer<typeof DesignerQuantityRuleType>;
export {};
//# sourceMappingURL=DesignerQuantityRuleType.d.ts.map