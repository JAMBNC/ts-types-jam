import { z } from "zod";
/**An order-level (cart) discount application.*/
export declare const CartDiscount: z.ZodObject<{
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
export type CartDiscount = z.infer<typeof CartDiscount>;
//# sourceMappingURL=CartDiscount.d.ts.map