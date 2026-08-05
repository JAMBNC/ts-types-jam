import { z } from "zod";
declare const _FulfillmentMoney: z.ZodObject<{
    amount: z.ZodString;
    currencyCode: z.ZodString;
}, z.core.$strict>;
type _FulfillmentMoneySchema = typeof _FulfillmentMoney;
export interface FulfillmentMoneySchema extends _FulfillmentMoneySchema {
}
/**A monetary amount in the shop's currency.*/
export declare const FulfillmentMoney: FulfillmentMoneySchema;
export type FulfillmentMoney = z.infer<typeof FulfillmentMoney>;
export {};
//# sourceMappingURL=FulfillmentMoney.d.ts.map