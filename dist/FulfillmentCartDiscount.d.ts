import { z } from "zod";
/**An order-level (cart) discount application.*/
export declare const FulfillmentCartDiscount: z.ZodObject<{
    type: z.ZodEnum<{
        automatic: "automatic";
        code: "code";
        manual: "manual";
        script: "script";
        unknown: "unknown";
    }>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
    percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentCartDiscount = z.infer<typeof FulfillmentCartDiscount>;
//# sourceMappingURL=FulfillmentCartDiscount.d.ts.map