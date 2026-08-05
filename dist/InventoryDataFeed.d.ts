import { z } from "zod";
declare const _InventoryDataFeed: z.ZodObject<{
    sku: z.ZodString;
    generatedAt: z.ZodOptional<z.ZodString>;
    inStock: z.ZodBoolean;
    stockQty: z.ZodNumber;
    locations: z.ZodOptional<z.ZodArray<import("./LocationStock.js").LocationStockSchema>>;
    plainLeadTimeDayRange: z.ZodOptional<import("./NonNegativeIntRange.js").NonNegativeIntRangeSchema>;
    customLeadTimeDayRange: z.ZodOptional<import("./NonNegativeIntRange.js").NonNegativeIntRangeSchema>;
    leadTimeLabel: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _InventoryDataFeedSchema = typeof _InventoryDataFeed;
export interface InventoryDataFeedSchema extends _InventoryDataFeedSchema {
}
export declare const InventoryDataFeed: InventoryDataFeedSchema;
export type InventoryDataFeed = z.infer<typeof InventoryDataFeed>;
export {};
//# sourceMappingURL=InventoryDataFeed.d.ts.map