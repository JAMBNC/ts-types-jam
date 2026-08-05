import { z } from "zod";
declare const _FulfillmentTransaction: z.ZodObject<{
    kind: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    gateway: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    status: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentTransactionSchema = typeof _FulfillmentTransaction;
export interface FulfillmentTransactionSchema extends _FulfillmentTransactionSchema {
}
/**A payment transaction on the order.*/
export declare const FulfillmentTransaction: FulfillmentTransactionSchema;
export type FulfillmentTransaction = z.infer<typeof FulfillmentTransaction>;
export {};
//# sourceMappingURL=FulfillmentTransaction.d.ts.map