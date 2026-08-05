import { z } from "zod";

const _LineItem = z
  .object({
    children: z.array(z.any()).optional(),
    discountAmount: z.number().gte(0).default(0),
    identifiers: z.record(z.string(), z.any()).optional(),
    imageUrls: z.array(z.string()).optional(),
    name: z.string(),
    productIdentifiers: z.record(z.string(), z.any()).optional(),
    quantity: z.number().gt(0),
    sku: z.string(),
    subtotal: z.number().gte(0).default(0),
    taxAmount: z.number().gte(0).default(0),
    total: z.number().gte(0).default(0),
    weightInPounds: z.number().gte(0).default(0),
  })
  .passthrough();
type _LineItemSchema = typeof _LineItem;
export interface LineItemSchema extends _LineItemSchema {}
export const LineItem: LineItemSchema = _LineItem;
export type LineItem = z.infer<typeof LineItem>;
