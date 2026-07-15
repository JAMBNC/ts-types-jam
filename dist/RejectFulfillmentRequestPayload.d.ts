import { z } from "zod";
export declare const RejectFulfillmentRequestPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    reason: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type RejectFulfillmentRequestPayload = z.infer<typeof RejectFulfillmentRequestPayload>;
//# sourceMappingURL=RejectFulfillmentRequestPayload.d.ts.map