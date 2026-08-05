import { z } from "zod";

const _FulfillmentMoney = z
  .object({
    /**Decimal string, e.g. "12.50".*/
    amount: z.string().describe('Decimal string, e.g. "12.50".'),
    /**ISO 4217 code, e.g. "USD".*/
    currencyCode: z.string().describe('ISO 4217 code, e.g. "USD".'),
  })
  .strict()
  .describe("A monetary amount in the shop's currency.");
type _FulfillmentMoneySchema = typeof _FulfillmentMoney;
export interface FulfillmentMoneySchema extends _FulfillmentMoneySchema {}
/**A monetary amount in the shop's currency.*/
export const FulfillmentMoney: FulfillmentMoneySchema = _FulfillmentMoney;
export type FulfillmentMoney = z.infer<typeof FulfillmentMoney>;
