import { z } from "zod";
/**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
export declare const FulfillmentDiscountType: z.ZodEnum<{
    automatic: "automatic";
    code: "code";
    manual: "manual";
    script: "script";
    unknown: "unknown";
}>;
export type FulfillmentDiscountType = z.infer<typeof FulfillmentDiscountType>;
//# sourceMappingURL=FulfillmentDiscountType.d.ts.map