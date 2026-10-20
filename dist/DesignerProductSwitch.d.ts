import { z } from "zod";
declare const _DesignerProductSwitch: z.ZodObject<{
    sku: z.ZodString;
    product: import("./Product.js").ProductSchema;
    config: import("./DesignerConfig.js").DesignerConfigSchema;
    pricing: import("./DesignerPricing.js").DesignerPricingSchema;
    quantityRules: import("./DesignerQuantityRules.js").DesignerQuantityRulesSchema;
    workspaceOptions: z.ZodArray<import("./WorkspaceOption.js").WorkspaceOptionSchema>;
}, z.core.$strict>;
type _DesignerProductSwitchSchema = typeof _DesignerProductSwitch;
export interface DesignerProductSwitchSchema extends _DesignerProductSwitchSchema {
}
/**The product the designer switches to, with the config, pricing and rules that come with it, resolved for the token's channel. The designer applies it in place and emits productChange with the sku.*/
export declare const DesignerProductSwitch: DesignerProductSwitchSchema;
export type DesignerProductSwitch = z.infer<typeof DesignerProductSwitch>;
export {};
//# sourceMappingURL=DesignerProductSwitch.d.ts.map