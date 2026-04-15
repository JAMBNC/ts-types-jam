import { z } from "zod";
export declare const DesignerPrintPreviewViewedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_print_preview_viewed">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerPrintPreviewViewedTrackingEvent = z.infer<typeof DesignerPrintPreviewViewedTrackingEvent>;
//# sourceMappingURL=DesignerPrintPreviewViewedTrackingEvent.d.ts.map