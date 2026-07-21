import { z } from "zod";
/**The backend asserts current stock for a set of SKUs; the mapper applies them at its channel's fulfillment-service location. Not tied to a fulfillment order.*/
export declare const SetInventoryMessage: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    messageId: z.ZodString;
    correlationId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    channel: z.ZodString;
    sentAt: z.ZodString;
    kind: z.ZodLiteral<"set_inventory">;
    payload: z.ZodObject<{
        levels: z.ZodArray<z.ZodObject<{
            sku: z.ZodString;
            available: z.ZodNumber;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>;
export type SetInventoryMessage = z.infer<typeof SetInventoryMessage>;
//# sourceMappingURL=SetInventoryMessage.d.ts.map