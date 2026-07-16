import { z } from "zod";
export declare const TaxLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    amount: z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>;
}, z.core.$strict>;
export type TaxLine = z.infer<typeof TaxLine>;
//# sourceMappingURL=TaxLine.d.ts.map