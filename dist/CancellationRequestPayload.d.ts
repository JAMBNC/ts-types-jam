import { z } from "zod";
export declare const CancellationRequestPayload: z.ZodObject<{
    fulfillmentOrders: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        orderId: z.ZodString;
        orderName: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        orderReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        status: z.ZodString;
        requestStatus: z.ZodString;
        destination: z.ZodUnion<readonly [z.ZodObject<{
            firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$loose>, z.ZodNull]>;
        lineItems: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
            quantity: z.ZodNumber;
            remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        }, z.core.$strict>>;
        merchantMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type CancellationRequestPayload = z.infer<typeof CancellationRequestPayload>;
//# sourceMappingURL=CancellationRequestPayload.d.ts.map