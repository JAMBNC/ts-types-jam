import { z } from "zod";
export declare const AcceptCancellationRequestPayload: z.ZodObject<{
    fulfillmentOrderId: z.ZodString;
    message: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type AcceptCancellationRequestPayload = z.infer<typeof AcceptCancellationRequestPayload>;
//# sourceMappingURL=AcceptCancellationRequestPayload.d.ts.map