import { z } from "zod";
export declare const AcceptFulfillmentRequestPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type AcceptFulfillmentRequestPayload = z.infer<typeof AcceptFulfillmentRequestPayload>;
//# sourceMappingURL=AcceptFulfillmentRequestPayload.d.ts.map