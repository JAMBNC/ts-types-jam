import { z } from "zod";
export declare const DesignerImageUploadedTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_uploaded">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerImageUploadedTrackingEvent = z.infer<typeof DesignerImageUploadedTrackingEvent>;
//# sourceMappingURL=DesignerImageUploadedTrackingEvent.d.ts.map