import { z } from "zod";
declare const _DesignerAddReturnAddressTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_return_address">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerAddReturnAddressTrackingEventSchema = typeof _DesignerAddReturnAddressTrackingEvent;
export interface DesignerAddReturnAddressTrackingEventSchema extends _DesignerAddReturnAddressTrackingEventSchema {
}
export declare const DesignerAddReturnAddressTrackingEvent: DesignerAddReturnAddressTrackingEventSchema;
export type DesignerAddReturnAddressTrackingEvent = z.infer<typeof DesignerAddReturnAddressTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddReturnAddressTrackingEvent.d.ts.map