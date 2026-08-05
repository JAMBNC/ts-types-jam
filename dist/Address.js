import { z } from "zod";
const _Address = z
    .object({
    city: z.string(),
    company: z.string().optional(),
    country: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
    lastName: z.string().optional(),
    phone: z.string().optional(),
    postal: z.string().optional(),
    region: z.string().optional(),
    streets: z.array(z.string()),
})
    .passthrough();
export const Address = _Address;
