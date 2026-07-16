import { z } from "zod";
import { FulfillmentDiscountType } from "./FulfillmentDiscountType.js";
import { FulfillmentMoney } from "./FulfillmentMoney.js";
/**A discount applied to a single line item.*/
export const FulfillmentDiscountAllocation = z
    .object({
    /**A monetary amount in the shop's currency.*/
    amount: FulfillmentMoney,
    /**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
    type: FulfillmentDiscountType,
    /**The discount code, when type is `code`.*/
    code: z
        .union([
        z.string().describe("The discount code, when type is `code`."),
        z.null().describe("The discount code, when type is `code`."),
    ])
        .describe("The discount code, when type is `code`.")
        .optional(),
    /**The discount title, for non-code discounts.*/
    title: z
        .union([
        z.string().describe("The discount title, for non-code discounts."),
        z.null().describe("The discount title, for non-code discounts."),
    ])
        .describe("The discount title, for non-code discounts.")
        .optional(),
})
    .strict()
    .describe("A discount applied to a single line item.");
