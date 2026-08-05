import { z } from "zod";
declare const _InventoryLevel: z.ZodObject<{
    sku: z.ZodString;
    available: z.ZodNumber;
}, z.core.$strict>;
type _InventoryLevelSchema = typeof _InventoryLevel;
export interface InventoryLevelSchema extends _InventoryLevelSchema {
}
/**An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.*/
export declare const InventoryLevel: InventoryLevelSchema;
export type InventoryLevel = z.infer<typeof InventoryLevel>;
export {};
//# sourceMappingURL=InventoryLevel.d.ts.map