import { z } from "zod";
/**A monetary amount in the shop's currency.*/
export declare const Money: z.ZodObject<{
    amount: z.ZodString;
    currencyCode: z.ZodString;
}, z.core.$strict>;
export type Money = z.infer<typeof Money>;
//# sourceMappingURL=Money.d.ts.map