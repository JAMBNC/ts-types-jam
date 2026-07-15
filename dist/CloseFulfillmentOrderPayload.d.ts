import { z } from "zod";
/**Close a fulfillment order the service accepted but can't complete (moves it to an incomplete/closed state on the channel).*/
export declare const CloseFulfillmentOrderPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type CloseFulfillmentOrderPayload = z.infer<typeof CloseFulfillmentOrderPayload>;
//# sourceMappingURL=CloseFulfillmentOrderPayload.d.ts.map