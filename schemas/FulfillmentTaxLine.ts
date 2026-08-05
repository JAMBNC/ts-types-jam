import { z } from "zod";
import { FulfillmentMoney } from "./FulfillmentMoney.js";

const _FulfillmentTaxLine = z
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
type _FulfillmentTaxLineSchema = typeof _FulfillmentTaxLine;
export interface FulfillmentTaxLineSchema extends _FulfillmentTaxLineSchema {}
export const FulfillmentTaxLine: FulfillmentTaxLineSchema = _FulfillmentTaxLine;
export type FulfillmentTaxLine = z.infer<typeof FulfillmentTaxLine>;
