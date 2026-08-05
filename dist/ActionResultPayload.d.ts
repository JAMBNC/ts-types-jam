import { z } from "zod";
declare const _ActionResultPayload: z.ZodObject<{
    action: import("./FulfillmentActionKind.js").FulfillmentActionKindSchema;
    fulfillmentOrderId: import("./ExternalId.js").ExternalIdSchema;
    status: import("./ActionResultStatus.js").ActionResultStatusSchema;
    fulfillmentId: z.ZodOptional<z.ZodUnion<readonly [import("./ExternalId.js").ExternalIdSchema, z.ZodNull]>>;
    errors: z.ZodOptional<z.ZodArray<import("./ActionError.js").ActionErrorSchema>>;
}, z.core.$strict>;
type _ActionResultPayloadSchema = typeof _ActionResultPayload;
export interface ActionResultPayloadSchema extends _ActionResultPayloadSchema {
}
/**Reports the real channel outcome of one outbound action, so the backend can reconcile state instead of assuming success on send.*/
export declare const ActionResultPayload: ActionResultPayloadSchema;
export type ActionResultPayload = z.infer<typeof ActionResultPayload>;
export {};
//# sourceMappingURL=ActionResultPayload.d.ts.map