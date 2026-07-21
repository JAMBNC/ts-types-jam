import { z } from "zod";
import { SetInventoryPayload } from "./SetInventoryPayload.js";

/**The backend asserts current stock for a set of SKUs; the mapper applies them at its channel's fulfillment-service location. Not tied to a fulfillment order.*/
export const SetInventoryMessage = z
  .object({
    version: z.literal("v1"),
    messageId: z.string().min(1),
    correlationId: z.union([z.string(), z.null()]),
    channel: z.string().min(1),
    sentAt: z.string().datetime({ offset: true }),
    kind: z.literal("set_inventory"),
    /**Absolute available levels for one or more SKUs. The mapper resolves each SKU to the channel's inventory item and sets its available quantity at the channel's fulfillment-service location. SKUs the channel doesn't recognize are reported as errors, not fatal to the batch.*/
    payload: SetInventoryPayload,
  })
  .strict()
  .describe(
    "The backend asserts current stock for a set of SKUs; the mapper applies them at its channel's fulfillment-service location. Not tied to a fulfillment order.",
  );
export type SetInventoryMessage = z.infer<typeof SetInventoryMessage>;
