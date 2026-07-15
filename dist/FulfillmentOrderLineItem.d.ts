import { z } from "zod";
/**A single line item on a hydrated fulfillment order.*/
export declare const FulfillmentOrderLineItem: z.ZodObject<{
    id: z.ZodString;
    orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    quantity: z.ZodNumber;
    remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentOrderLineItem = z.infer<typeof FulfillmentOrderLineItem>;
//# sourceMappingURL=FulfillmentOrderLineItem.d.ts.map