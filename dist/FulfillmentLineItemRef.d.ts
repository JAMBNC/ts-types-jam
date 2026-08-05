import { z } from "zod";
declare const _FulfillmentLineItemRef: z.ZodObject<{
    fulfillmentOrderLineItemId: import("./ExternalId.js").ExternalIdSchema;
    quantity: z.ZodNumber;
}, z.core.$strict>;
type _FulfillmentLineItemRefSchema = typeof _FulfillmentLineItemRef;
export interface FulfillmentLineItemRefSchema extends _FulfillmentLineItemRefSchema {
}
/**A specific fulfillment order line item and quantity to fulfill (for partial fulfillment).*/
export declare const FulfillmentLineItemRef: FulfillmentLineItemRefSchema;
export type FulfillmentLineItemRef = z.infer<typeof FulfillmentLineItemRef>;
export {};
//# sourceMappingURL=FulfillmentLineItemRef.d.ts.map