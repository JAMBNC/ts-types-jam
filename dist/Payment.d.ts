import { z } from "zod";
export declare const Payment: z.ZodObject<{
    amount: z.ZodOptional<z.ZodNumber>;
    billToName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    method: z.ZodEnum<{
        CASH: "CASH";
        PO: "PO";
        CREDIT_CARD: "CREDIT_CARD";
        ON_ACCOUNT: "ON_ACCOUNT";
    }>;
    paymentDate: z.ZodOptional<z.ZodString>;
    poNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type Payment = z.infer<typeof Payment>;
//# sourceMappingURL=Payment.d.ts.map