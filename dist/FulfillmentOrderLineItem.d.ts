import { z } from "zod";
/**A single line item on a hydrated fulfillment order.*/
export declare const FulfillmentOrderLineItem: z.ZodObject<{
    id: z.ZodString;
    orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    quantity: z.ZodNumber;
    remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
    title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    variantTitle: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    unitPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
    discountedUnitPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        amount: z.ZodString;
        currencyCode: z.ZodString;
    }, z.core.$strict>, z.ZodNull]>>;
    discountAllocations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        amount: z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>;
        type: z.ZodEnum<{
            automatic: "automatic";
            code: "code";
            manual: "manual";
            script: "script";
            unknown: "unknown";
        }>;
        code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>>>;
    attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>>>;
    taxLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        amount: z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>;
    }, z.core.$strict>>>;
}, z.core.$strict>;
export type FulfillmentOrderLineItem = z.infer<typeof FulfillmentOrderLineItem>;
//# sourceMappingURL=FulfillmentOrderLineItem.d.ts.map