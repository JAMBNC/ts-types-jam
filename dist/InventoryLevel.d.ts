import { z } from "zod";
/**An absolute stock level for one SKU. available is the sellable quantity the backend asserts; the mapper sets it as an absolute value (not a delta) at the channel's fulfillment-service location.*/
export declare const InventoryLevel: z.ZodObject<{
    sku: z.ZodString;
    available: z.ZodNumber;
}, z.core.$strict>;
export type InventoryLevel = z.infer<typeof InventoryLevel>;
//# sourceMappingURL=InventoryLevel.d.ts.map