import { z } from "zod";
export const Customer = z.object({
    addresses: z.array(z.any()).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    lastName: z.string().optional(),
});
