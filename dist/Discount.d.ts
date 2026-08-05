import { z } from "zod";
declare const _Discount: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
    code: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, z.core.$loose>;
type _DiscountSchema = typeof _Discount;
export interface DiscountSchema extends _DiscountSchema {
}
export declare const Discount: DiscountSchema;
export type Discount = z.infer<typeof Discount>;
export {};
//# sourceMappingURL=Discount.d.ts.map