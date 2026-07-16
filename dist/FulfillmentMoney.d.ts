import { z } from "zod";
/**A monetary amount in the shop's currency.*/
export declare const FulfillmentMoney: z.ZodObject<{
    amount: z.ZodString;
    currencyCode: z.ZodString;
}, z.core.$strict>;
export type FulfillmentMoney = z.infer<typeof FulfillmentMoney>;
//# sourceMappingURL=FulfillmentMoney.d.ts.map