import { z } from "zod";

/**An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.*/
export const InventoryLevel = z
  .object({ sku: z.string().min(1), available: z.number().int().gte(0) })
  .strict()
  .describe(
    "An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.",
  );
export type InventoryLevel = z.infer<typeof InventoryLevel>;
