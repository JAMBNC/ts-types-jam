import { z } from "zod";
export declare const DesignerImageRemovedFromGalleryTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_removed_from_gallery">;
    payload: z.ZodObject<{
        designer: z.ZodEnum<{
            base: "base";
            hermes: "hermes";
        }>;
        merchant: z.ZodString;
        deltaTime: z.ZodNumber;
    }, z.core.$strict>;
}, z.core.$strict>;
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<typeof DesignerImageRemovedFromGalleryTrackingEvent>;
//# sourceMappingURL=DesignerImageRemovedFromGalleryTrackingEvent.d.ts.map