import { z } from "zod";
declare const _DesignerPricing: z.ZodRecord<z.ZodString, z.ZodArray<import("./TierPrice.js").TierPriceSchema>>;
type _DesignerPricingSchema = typeof _DesignerPricing;
export interface DesignerPricingSchema extends _DesignerPricingSchema {
}
/**Price tiers keyed by product SKU.*/
export declare const DesignerPricing: DesignerPricingSchema;
export type DesignerPricing = z.infer<typeof DesignerPricing>;
export {};
//# sourceMappingURL=DesignerPricing.d.ts.map