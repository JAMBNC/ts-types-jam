import { z } from "zod";
declare const _DesignerPrintPreviewViewedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_print_preview_viewed">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerPrintPreviewViewedTrackingEventSchema = typeof _DesignerPrintPreviewViewedTrackingEvent;
export interface DesignerPrintPreviewViewedTrackingEventSchema extends _DesignerPrintPreviewViewedTrackingEventSchema {
}
export declare const DesignerPrintPreviewViewedTrackingEvent: DesignerPrintPreviewViewedTrackingEventSchema;
export type DesignerPrintPreviewViewedTrackingEvent = z.infer<typeof DesignerPrintPreviewViewedTrackingEvent>;
export {};
//# sourceMappingURL=DesignerPrintPreviewViewedTrackingEvent.d.ts.map