import { z } from "zod";
declare const _DesignerRemoveCoatingTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_remove_coating">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerRemoveCoatingTrackingEventSchema = typeof _DesignerRemoveCoatingTrackingEvent;
export interface DesignerRemoveCoatingTrackingEventSchema extends _DesignerRemoveCoatingTrackingEventSchema {
}
export declare const DesignerRemoveCoatingTrackingEvent: DesignerRemoveCoatingTrackingEventSchema;
export type DesignerRemoveCoatingTrackingEvent = z.infer<typeof DesignerRemoveCoatingTrackingEvent>;
export {};
//# sourceMappingURL=DesignerRemoveCoatingTrackingEvent.d.ts.map