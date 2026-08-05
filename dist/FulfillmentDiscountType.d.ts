import { z } from "zod";
declare const _FulfillmentDiscountType: z.ZodEnum<{
    automatic: "automatic";
    code: "code";
    manual: "manual";
    script: "script";
    unknown: "unknown";
}>;
type _FulfillmentDiscountTypeSchema = typeof _FulfillmentDiscountType;
export interface FulfillmentDiscountTypeSchema extends _FulfillmentDiscountTypeSchema {
}
/**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
export declare const FulfillmentDiscountType: FulfillmentDiscountTypeSchema;
export type FulfillmentDiscountType = z.infer<typeof FulfillmentDiscountType>;
export {};
//# sourceMappingURL=FulfillmentDiscountType.d.ts.map