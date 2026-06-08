import { z } from "zod";
export const LocationStock = z
    .object({
    /**Fulfillment source code, e.g. "northvale" or "syracuse".*/
    sourceCode: z
        .string()
        .describe('Fulfillment source code, e.g. "northvale" or "syracuse".'),
    stockQty: z.number().int().gte(0),
    inStock: z.boolean().optional(),
})
    .passthrough();
