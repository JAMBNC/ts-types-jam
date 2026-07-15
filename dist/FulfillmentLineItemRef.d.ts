import { z } from "zod";
/**A specific fulfillment order line item and quantity to fulfill (for partial fulfillment).*/
export declare const FulfillmentLineItemRef: z.ZodObject<{
    fulfillmentOrderLineItemId: z.ZodString;
    quantity: z.ZodNumber;
}, z.core.$strict>;
export type FulfillmentLineItemRef = z.infer<typeof FulfillmentLineItemRef>;
//# sourceMappingURL=FulfillmentLineItemRef.d.ts.map