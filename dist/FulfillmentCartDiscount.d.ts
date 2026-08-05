import { z } from "zod";
declare const _FulfillmentCartDiscount: z.ZodObject<{
    type: import("./FulfillmentDiscountType.js").FulfillmentDiscountTypeSchema;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    amount: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentCartDiscountSchema = typeof _FulfillmentCartDiscount;
export interface FulfillmentCartDiscountSchema extends _FulfillmentCartDiscountSchema {
}
/**An order-level (cart) discount application.*/
export declare const FulfillmentCartDiscount: FulfillmentCartDiscountSchema;
export type FulfillmentCartDiscount = z.infer<typeof FulfillmentCartDiscount>;
export {};
//# sourceMappingURL=FulfillmentCartDiscount.d.ts.map