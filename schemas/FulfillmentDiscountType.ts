import { z } from "zod";

const _FulfillmentDiscountType = z
  .enum(["code", "automatic", "script", "manual", "unknown"])
  .describe(
    "How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).",
  );
type _FulfillmentDiscountTypeSchema = typeof _FulfillmentDiscountType;
export interface FulfillmentDiscountTypeSchema extends _FulfillmentDiscountTypeSchema {}
/**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
export const FulfillmentDiscountType: FulfillmentDiscountTypeSchema =
  _FulfillmentDiscountType;
export type FulfillmentDiscountType = z.infer<typeof FulfillmentDiscountType>;
