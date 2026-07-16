import { z } from "zod";
export declare const FulfillmentTaxLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    amount: z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type FulfillmentTaxLine = z.infer<typeof FulfillmentTaxLine>;
//# sourceMappingURL=FulfillmentTaxLine.d.ts.map