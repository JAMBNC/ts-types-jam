import { z } from "zod";
export declare const ShippingLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    carrier: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
}, z.core.$strict>;
export type ShippingLine = z.infer<typeof ShippingLine>;
//# sourceMappingURL=ShippingLine.d.ts.map