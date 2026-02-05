import { z } from "zod";
import { Address } from "./Address.js";

export const Customer = z
  .object({
    addresses: z.array(Address).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.any()).optional(),
    lastName: z.string().optional(),
  })
  .passthrough();
export type Customer = z.infer<typeof Customer>;
