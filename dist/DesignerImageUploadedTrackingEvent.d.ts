import { z } from "zod";
declare const _DesignerImageUploadedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_uploaded">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerImageUploadedTrackingEventSchema = typeof _DesignerImageUploadedTrackingEvent;
export interface DesignerImageUploadedTrackingEventSchema extends _DesignerImageUploadedTrackingEventSchema {
}
export declare const DesignerImageUploadedTrackingEvent: DesignerImageUploadedTrackingEventSchema;
export type DesignerImageUploadedTrackingEvent = z.infer<typeof DesignerImageUploadedTrackingEvent>;
export {};
//# sourceMappingURL=DesignerImageUploadedTrackingEvent.d.ts.map