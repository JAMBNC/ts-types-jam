import { z } from "zod";
export declare const DesignerPrintPreviewViewedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_print_preview_viewed">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerPrintPreviewViewedTrackingEvent = z.infer<typeof DesignerPrintPreviewViewedTrackingEvent>;
//# sourceMappingURL=DesignerPrintPreviewViewedTrackingEvent.d.ts.map