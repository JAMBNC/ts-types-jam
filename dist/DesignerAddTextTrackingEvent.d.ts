import { z } from "zod";
declare const _DesignerAddTextTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_text">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerAddTextTrackingEventSchema = typeof _DesignerAddTextTrackingEvent;
export interface DesignerAddTextTrackingEventSchema extends _DesignerAddTextTrackingEventSchema {
}
export declare const DesignerAddTextTrackingEvent: DesignerAddTextTrackingEventSchema;
export type DesignerAddTextTrackingEvent = z.infer<typeof DesignerAddTextTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddTextTrackingEvent.d.ts.map