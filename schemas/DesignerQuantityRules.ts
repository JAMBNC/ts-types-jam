import { z } from "zod";
import { DesignerQuantityRule } from "./DesignerQuantityRule.js";

const _DesignerQuantityRules = z
  .record(z.string(), DesignerQuantityRule)
  .superRefine((value, ctx) => {
    for (const key in value) {
      const result = z.string().describe("sku").safeParse(key);
      if (!result.success) {
        ctx.addIssue({
          path: [...ctx.path, key],
          code: "custom",
          message: `Invalid property name: ${key}`,
          params: {
            issues: result.error.issues,
          },
        });
      }
    }
  })
  .describe(
    "Quantity rules key by sku, A priced line without an entry is per_base, applied up from the product base quantity.",
  );
type _DesignerQuantityRulesSchema = typeof _DesignerQuantityRules;
export interface DesignerQuantityRulesSchema extends _DesignerQuantityRulesSchema {}
/**Quantity rules key by sku, A priced line without an entry is per_base, applied up from the product base quantity.*/
export const DesignerQuantityRules: DesignerQuantityRulesSchema =
  _DesignerQuantityRules;
export type DesignerQuantityRules = z.infer<typeof DesignerQuantityRules>;
