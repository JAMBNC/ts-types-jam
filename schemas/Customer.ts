import { z } from "zod";
import { Address } from "./Address.js";

const _Customer = z
  .object({
    addresses: z.array(Address).optional(),
    email: z.string().optional(),
    firstName: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
    lastName: z.string().optional(),
  })
  .passthrough();
type _CustomerSchema = typeof _Customer;
export interface CustomerSchema extends _CustomerSchema {}
export const Customer: CustomerSchema = _Customer;
export type Customer = z.infer<typeof Customer>;
