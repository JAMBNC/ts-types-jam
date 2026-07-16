import { z } from "zod";
import { DiscountType } from "./DiscountType.js";
import { Money } from "./Money.js";
/**An order-level (cart) discount application.*/
export const CartDiscount = z
    .object({
    /**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
    type: DiscountType,
    code: z.union([z.string(), z.null()]).optional(),
    title: z.union([z.string(), z.null()]).optional(),
    /**Fixed discount amount, when the value is an amount.*/
    amount: z
        .union([Money, z.null()])
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
