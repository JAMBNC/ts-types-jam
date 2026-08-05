import { z } from "zod";
declare const _LocationStock: z.ZodObject<{
    sourceCode: z.ZodString;
    stockQty: z.ZodNumber;
    inStock: z.ZodOptional<z.ZodBoolean>;
}, z.core.$loose>;
type _LocationStockSchema = typeof _LocationStock;
export interface LocationStockSchema extends _LocationStockSchema {
}
export declare const LocationStock: LocationStockSchema;
export type LocationStock = z.infer<typeof LocationStock>;
export {};
//# sourceMappingURL=LocationStock.d.ts.map