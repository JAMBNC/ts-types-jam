import { z } from "zod";

const _DesignerQuantityRuleType = z
  .enum(["per_base", "per_n_base", "one_time"])
  .describe(
    "How a priced line's quantity derives from the base product quantity. per_base=same as the base quantity. per_n_base=ceil(base quantity / ratioToBase). one_time=always 1.",
  );
type _DesignerQuantityRuleTypeSchema = typeof _DesignerQuantityRuleType;
export interface DesignerQuantityRuleTypeSchema extends _DesignerQuantityRuleTypeSchema {}
/**How a priced line's quantity derives from the base product quantity. per_base=same as the base quantity. per_n_base=ceil(base quantity / ratioToBase). one_time=always 1.*/
export const DesignerQuantityRuleType: DesignerQuantityRuleTypeSchema =
  _DesignerQuantityRuleType;
export type DesignerQuantityRuleType = z.infer<typeof DesignerQuantityRuleType>;
