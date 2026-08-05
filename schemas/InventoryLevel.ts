import { z } from "zod";

const _InventoryLevel = z
  .object({ sku: z.string().min(1), available: z.number().int().gte(0) })
  .strict()
  .describe(
    "An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.",
  );
type _InventoryLevelSchema = typeof _InventoryLevel;
export interface InventoryLevelSchema extends _InventoryLevelSchema {}
/**An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.*/
export const InventoryLevel: InventoryLevelSchema = _InventoryLevel;
export type InventoryLevel = z.infer<typeof InventoryLevel>;
