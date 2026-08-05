import { z } from "zod";

const _LocationStock = z
  .object({
    /**Fulfillment source code, e.g. "northvale" or "syracuse".*/
    sourceCode: z
      .string()
      .describe('Fulfillment source code, e.g. "northvale" or "syracuse".'),
    stockQty: z.number().int().gte(0),
    inStock: z.boolean().optional(),
  })
  .passthrough();
type _LocationStockSchema = typeof _LocationStock;
export interface LocationStockSchema extends _LocationStockSchema {}
export const LocationStock: LocationStockSchema = _LocationStock;
export type LocationStock = z.infer<typeof LocationStock>;
