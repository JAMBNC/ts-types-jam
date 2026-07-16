import { z } from "zod";
/**A payment transaction on the order.*/
export declare const Transaction: z.ZodObject<{
    kind: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    gateway: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
}, z.core.$strict>;
export type Transaction = z.infer<typeof Transaction>;
//# sourceMappingURL=Transaction.d.ts.map