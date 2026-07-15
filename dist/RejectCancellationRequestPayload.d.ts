import { z } from "zod";
export declare const RejectCancellationRequestPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type RejectCancellationRequestPayload = z.infer<typeof RejectCancellationRequestPayload>;
//# sourceMappingURL=RejectCancellationRequestPayload.d.ts.map