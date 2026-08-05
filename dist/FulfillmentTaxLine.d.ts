import { z } from "zod";
declare const _FulfillmentTaxLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    amount: import("./FulfillmentMoney.js").FulfillmentMoneySchema;
}, z.core.$strict>;
type _FulfillmentTaxLineSchema = typeof _FulfillmentTaxLine;
export interface FulfillmentTaxLineSchema extends _FulfillmentTaxLineSchema {
}
export declare const FulfillmentTaxLine: FulfillmentTaxLineSchema;
export type FulfillmentTaxLine = z.infer<typeof FulfillmentTaxLine>;
export {};
//# sourceMappingURL=FulfillmentTaxLine.d.ts.map