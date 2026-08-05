import { z } from "zod";

const _Discount = z
  .object({
    description: z.string().optional(),
    amount: z.number().gte(0).optional(),
    code: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
  })
  .passthrough();
type _DiscountSchema = typeof _Discount;
export interface DiscountSchema extends _DiscountSchema {}
export const Discount: DiscountSchema = _Discount;
export type Discount = z.infer<typeof Discount>;
