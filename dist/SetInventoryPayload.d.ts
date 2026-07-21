import { z } from "zod";
/**Absolute available levels for one or more SKUs. The mapper resolves each SKU to the channel's inventory item and sets its available quantity at the channel's fulfillment-service location. SKUs the channel doesn't recognize are reported as errors, not fatal to the batch.*/
export declare const SetInventoryPayload: z.ZodObject<{
    levels: z.ZodArray<z.ZodObject<{
        sku: z.ZodString;
        available: z.ZodNumber;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type SetInventoryPayload = z.infer<typeof SetInventoryPayload>;
//# sourceMappingURL=SetInventoryPayload.d.ts.map