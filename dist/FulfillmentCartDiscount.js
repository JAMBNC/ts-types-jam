import { z } from "zod";
import { FulfillmentDiscountType } from "./FulfillmentDiscountType.js";
import { FulfillmentMoney } from "./FulfillmentMoney.js";
/**An order-level (cart) discount application.*/
export const FulfillmentCartDiscount = z
    .object({
    /**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
    type: FulfillmentDiscountType,
    code: z.union([z.string(), z.null()]).optional(),
    title: z.union([z.string(), z.null()]).optional(),
    /**Fixed discount amount, when the value is an amount.*/
    amount: z
        .union([FulfillmentMoney, z.null()])
        .describe("Fixed discount amount, when the value is an amount.")
        .optional(),
    /**Discount percentage, when the value is a percentage.*/
    percentage: z
        .union([
        z
            .number()
            .describe("Discount percentage, when the value is a percentage."),
        z
            .null()
            .describe("Discount percentage, when the value is a percentage."),
    ])
        .describe("Discount percentage, when the value is a percentage.")
        .optional(),
})
    .strict()
    .describe("An order-level (cart) discount application.");
