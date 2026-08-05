import { z } from "zod";
declare const _FulfillmentShippingLine: z.ZodObject<{
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    carrier: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    price: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentShippingLineSchema = typeof _FulfillmentShippingLine;
export interface FulfillmentShippingLineSchema extends _FulfillmentShippingLineSchema {
}
export declare const FulfillmentShippingLine: FulfillmentShippingLineSchema;
export type FulfillmentShippingLine = z.infer<typeof FulfillmentShippingLine>;
export {};
//# sourceMappingURL=FulfillmentShippingLine.d.ts.map