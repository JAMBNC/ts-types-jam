import { z } from "zod";
import { DiscountType } from "./DiscountType.js";
import { Money } from "./Money.js";

/**A discount applied to a single line item.*/
export const DiscountAllocation = z
  .object({
    /**A monetary amount in the shop's currency.*/
    amount: Money,
    /**How a discount was applied. `code` = a customer-entered discount code (couponed); the rest are merchant/automatic (non-couponed).*/
    type: DiscountType,
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
export type DiscountAllocation = z.infer<typeof DiscountAllocation>;
