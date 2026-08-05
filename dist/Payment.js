import { z } from "zod";
import { Method } from "./Method.js";
const _Payment = z
    .object({
    amount: z.number().gte(0).optional(),
    billToName: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
    method: Method,
    paymentDate: z.string().datetime({ offset: true }).optional(),
    poNumber: z.string().optional(),
    status: z.string().optional(),
})
    .passthrough();
export const Payment = _Payment;
