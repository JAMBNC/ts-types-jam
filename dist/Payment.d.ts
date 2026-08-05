import { z } from "zod";
declare const _Payment: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    billToName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    method: import("./Method.js").MethodSchema;
    paymentDate: z.ZodOptional<z.ZodString>;
    poNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _PaymentSchema = typeof _Payment;
export interface PaymentSchema extends _PaymentSchema {
}
export declare const Payment: PaymentSchema;
export type Payment = z.infer<typeof Payment>;
export {};
//# sourceMappingURL=Payment.d.ts.map