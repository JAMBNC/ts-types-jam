import { z } from "zod";
declare const _DesignerAddImageTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_add_image">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerAddImageTrackingEventSchema = typeof _DesignerAddImageTrackingEvent;
export interface DesignerAddImageTrackingEventSchema extends _DesignerAddImageTrackingEventSchema {
}
export declare const DesignerAddImageTrackingEvent: DesignerAddImageTrackingEventSchema;
export type DesignerAddImageTrackingEvent = z.infer<typeof DesignerAddImageTrackingEvent>;
export {};
//# sourceMappingURL=DesignerAddImageTrackingEvent.d.ts.map