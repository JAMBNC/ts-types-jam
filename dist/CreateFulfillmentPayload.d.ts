import { z } from "zod";
/**Fulfill a fulfillment order. lineItems null means fulfill all remaining line items. tracking may be attached now or later via update_tracking.*/
export declare const CreateFulfillmentPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    lineItems: z.ZodUnion<readonly [z.ZodArray<z.ZodObject<{
        fulfillmentOrderLineItemId: z.ZodString;
        quantity: z.ZodNumber;
    }, z.core.$strict>>, z.ZodNull]>;
    tracking: z.ZodUnion<readonly [z.ZodObject<{
        company: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        numbers: z.ZodArray<z.ZodString>;
        url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>, z.ZodNull]>;
    notifyCustomer: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strict>;
export type CreateFulfillmentPayload = z.infer<typeof CreateFulfillmentPayload>;
//# sourceMappingURL=CreateFulfillmentPayload.d.ts.map