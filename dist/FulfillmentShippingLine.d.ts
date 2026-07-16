import { z } from "zod";
export declare const FulfillmentShippingLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    carrier: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentShippingLine = z.infer<typeof FulfillmentShippingLine>;
//# sourceMappingURL=FulfillmentShippingLine.d.ts.map