import { z } from "zod";
export const Payment = z.object({
    amount: z.number().gte(0).optional(),
    billToName: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    method: z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]),
    paymentDate: z.string().datetime({ offset: true }).optional(),
    poNumber: z.string().optional(),
    status: z.string().optional(),
});
