import { z } from "zod";
declare const _FulfillmentOrder: z.ZodObject<{
    id: import("./ExternalId.js").ExternalIdSchema;
    orderId: import("./ExternalId.js").ExternalIdSchema;
    orderName: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    orderReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    status: z.ZodString;
    requestStatus: z.ZodString;
    destination: z.ZodUnion<readonly [import("./FulfillmentOrderDestination.js").FulfillmentOrderDestinationSchema, z.ZodNull]>;
    lineItems: z.ZodArray<import("./FulfillmentOrderLineItem.js").FulfillmentOrderLineItemSchema>;
    deliveryMethod: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        methodType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>, z.ZodNull]>>;
    order: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentOrderDetails.js").FulfillmentOrderDetailsSchema, z.ZodNull]>>;
    merchantMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
type _FulfillmentOrderSchema = typeof _FulfillmentOrder;
export interface FulfillmentOrderSchema extends _FulfillmentOrderSchema {
}
/**A mapper-hydrated fulfillment order: enough for the backend to fulfill without calling the channel.*/
export declare const FulfillmentOrder: FulfillmentOrderSchema;
export type FulfillmentOrder = z.infer<typeof FulfillmentOrder>;
export {};
//# sourceMappingURL=FulfillmentOrder.d.ts.map