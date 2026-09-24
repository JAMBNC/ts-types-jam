import { z } from "zod";
import { DesignerQuantityRuleType } from "./DesignerQuantityRuleType.js";
const _DesignerQuantityRule = z
    .object({
    /**How a priced line's quantity derives from the base product quantity. per_base=same as the base quantity. per_n_base=ceil(base quantity / ratioToBase). one_time=always 1.*/
    rule: DesignerQuantityRuleType,
    /**Base units per line unit, rounded up. Only used by per_n_base.*/
    ratioToBase: z
        .number()
        .int()
        .gte(2)
        .describe("Base units per line unit, rounded up. Only used by per_n_base.")
        .optional(),
})
    .strict();
export const DesignerQuantityRule = _DesignerQuantityRule;
