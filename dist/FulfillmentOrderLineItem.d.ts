import { z } from "zod";
declare const _FulfillmentOrderLineItem: z.ZodObject<{
    id: import("./ExternalId.js").ExternalIdSchema;
    orderLineItemId: z.ZodUnion<readonly [import("./ExternalId.js").ExternalIdSchema, z.ZodNull]>;
    sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    quantity: z.ZodNumber;
    remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    variantTitle: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    unitPrice: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    discountedUnitPrice: z.ZodOptional<z.ZodUnion<readonly [import("./FulfillmentMoney.js").FulfillmentMoneySchema, z.ZodNull]>>;
    discountAllocations: z.ZodOptional<z.ZodArray<import("./FulfillmentDiscountAllocation.js").FulfillmentDiscountAllocationSchema>>;
    attributes: z.ZodOptional<z.ZodArray<import("./FulfillmentLineAttribute.js").FulfillmentLineAttributeSchema>>;
    taxLines: z.ZodOptional<z.ZodArray<import("./FulfillmentTaxLine.js").FulfillmentTaxLineSchema>>;
}, z.core.$strict>;
type _FulfillmentOrderLineItemSchema = typeof _FulfillmentOrderLineItem;
export interface FulfillmentOrderLineItemSchema extends _FulfillmentOrderLineItemSchema {
}
/**A single line item on a hydrated fulfillment order.*/
export declare const FulfillmentOrderLineItem: FulfillmentOrderLineItemSchema;
export type FulfillmentOrderLineItem = z.infer<typeof FulfillmentOrderLineItem>;
export {};
//# sourceMappingURL=FulfillmentOrderLineItem.d.ts.map