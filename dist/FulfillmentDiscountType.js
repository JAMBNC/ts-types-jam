import { z } from "zod";
const _FulfillmentDiscountType = z
    .enum(["code", "automatic", "script", "manual", "unknown"])
    .describe("How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).");
/**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
export const FulfillmentDiscountType = _FulfillmentDiscountType;
