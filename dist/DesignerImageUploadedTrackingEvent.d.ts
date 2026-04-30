import { z } from "zod";
export declare const DesignerImageUploadedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_uploaded">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerImageUploadedTrackingEvent = z.infer<typeof DesignerImageUploadedTrackingEvent>;
//# sourceMappingURL=DesignerImageUploadedTrackingEvent.d.ts.map