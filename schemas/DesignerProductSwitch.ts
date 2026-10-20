import { z } from "zod";
import { DesignerConfig } from "./DesignerConfig.js";
import { DesignerPricing } from "./DesignerPricing.js";
import { DesignerQuantityRules } from "./DesignerQuantityRules.js";
import { Product } from "./Product.js";
import { WorkspaceOption } from "./WorkspaceOption.js";

const _DesignerProductSwitch = z
  .object({
    /**The channel SKU being switched to, the one the host sells.*/
    sku: z
      .string()
      .describe("The channel SKU being switched to, the one the host sells."),
    product: Product,
    config: DesignerConfig,
    /**Price tiers keyed by product SKU.*/
    pricing: DesignerPricing,
    /**Quantity rules key by sku, A priced line without an entry is per_base, applied up from the product base quantity.*/
    quantityRules: DesignerQuantityRules,
    /**The product's workspace options, empty when it has none.*/
    workspaceOptions: z
      .array(WorkspaceOption)
      .describe("The product's workspace options, empty when it has none."),
  })
  .strict()
  .describe(
    "The product the designer switches to, with the config, pricing and rules that come with it, resolved for the token's channel. The designer applies it in place and emits productChange with the sku.",
  );
type _DesignerProductSwitchSchema = typeof _DesignerProductSwitch;
export interface DesignerProductSwitchSchema extends _DesignerProductSwitchSchema {}
/**The product the designer switches to, with the config, pricing and rules that come with it, resolved for the token's channel. The designer applies it in place and emits productChange with the sku.*/
export const DesignerProductSwitch: DesignerProductSwitchSchema =
  _DesignerProductSwitch;
export type DesignerProductSwitch = z.infer<typeof DesignerProductSwitch>;
