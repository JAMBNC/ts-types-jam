import { z } from "zod";
declare const _DesignerAddCoatingTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_coating">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerAddCoatingTrackingEventSchema = typeof _DesignerAddCoatingTrackingEvent;
export interface DesignerAddCoatingTrackingEventSchema extends _DesignerAddCoatingTrackingEventSchema {
}
export declare const DesignerAddCoatingTrackingEvent: DesignerAddCoatingTrackingEventSchema;
export type DesignerAddCoatingTrackingEvent = z.infer<typeof DesignerAddCoatingTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddCoatingTrackingEvent.d.ts.map