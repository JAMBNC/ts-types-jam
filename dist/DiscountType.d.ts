import { z } from "zod";
/**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
export declare const DiscountType: z.ZodEnum<{
    automatic: "automatic";
    code: "code";
    manual: "manual";
    script: "script";
    unknown: "unknown";
}>;
export type DiscountType = z.infer<typeof DiscountType>;
//# sourceMappingURL=DiscountType.d.ts.map