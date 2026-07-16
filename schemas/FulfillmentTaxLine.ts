import { z } from "zod";
import { FulfillmentMoney } from "./FulfillmentMoney.js";

export const FulfillmentTaxLine = z
  .object({
    title: z.union([z.string(), z.null()]).optional(),
    /**Tax rate as a percentage, e.g. 8.25.*/
    ratePercentage: z
      .union([
        z.number().describe("Tax rate as a percentage, e.g. 8.25."),
        z.null().describe("Tax rate as a percentage, e.g. 8.25."),
      ])
      .describe("Tax rate as a percentage, e.g. 8.25.")
      .optional(),
    /**A monetary amount in the shop's currency.*/
    amount: FulfillmentMoney,
  })
  .strict();
export type FulfillmentTaxLine = z.infer<typeof FulfillmentTaxLine>;
