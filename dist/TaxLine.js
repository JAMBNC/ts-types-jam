import { z } from "zod";
import { Money } from "./Money.js";
export const TaxLine = z
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
    amount: Money,
})
    .strict();
