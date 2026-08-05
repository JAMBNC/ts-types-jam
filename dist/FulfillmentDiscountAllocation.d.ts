import { z } from "zod";
declare const _FulfillmentDiscountAllocation: z.ZodObject<{
    amount: import("./FulfillmentMoney.js").FulfillmentMoneySchema;
    type: import("./FulfillmentDiscountType.js").FulfillmentDiscountTypeSchema;
    code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentDiscountAllocationSchema = typeof _FulfillmentDiscountAllocation;
export interface FulfillmentDiscountAllocationSchema extends _FulfillmentDiscountAllocationSchema {
}
/**A discount applied to a single line item.*/
export declare const FulfillmentDiscountAllocation: FulfillmentDiscountAllocationSchema;
export type FulfillmentDiscountAllocation = z.infer<typeof FulfillmentDiscountAllocation>;
export {};
//# sourceMappingURL=FulfillmentDiscountAllocation.d.ts.map