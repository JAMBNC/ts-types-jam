import { z } from "zod";
declare const _SetInventoryPayload: z.ZodObject<{
    levels: z.ZodArray<import("./InventoryLevel.js").InventoryLevelSchema>;
}, z.core.$strict>;
type _SetInventoryPayloadSchema = typeof _SetInventoryPayload;
export interface SetInventoryPayloadSchema extends _SetInventoryPayloadSchema {
}
/**Absolute available levels for one or more SKUs. The mapper resolves each SKU to the channel's inventory item and sets its available quantity at the channel's fulfillment-service location. SKUs the channel doesn't recognize are reported as errors, not fatal to the batch.*/
export declare const SetInventoryPayload: SetInventoryPayloadSchema;
export type SetInventoryPayload = z.infer<typeof SetInventoryPayload>;
export {};
//# sourceMappingURL=SetInventoryPayload.d.ts.map