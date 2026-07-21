import { z } from "zod";
import { InventoryLevel } from "./InventoryLevel.js";
/**Absolute available levels for one or more SKUs. The mapper resolves each SKU to the channel's inventory item and sets its available quantity at the channel's fulfillment-service location. SKUs the channel doesn't recognize are reported as errors, not fatal to the batch.*/
export const SetInventoryPayload = z
    .object({ levels: z.array(InventoryLevel).min(1) })
    .strict()
    .describe("Absolute available levels for one or more SKUs. The mapper resolves each SKU to the channel's inventory item and sets its available quantity at the channel's fulfillment-service location. SKUs the channel doesn't recognize are reported as errors, not fatal to the batch.");
