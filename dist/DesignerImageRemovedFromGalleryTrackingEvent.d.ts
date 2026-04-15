import { z } from "zod";
export declare const DesignerImageRemovedFromGalleryTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_removed_from_gallery">;
    payload: z.ZodRecord<z.ZodString, z.ZodNever>;
}, z.core.$strict>;
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<typeof DesignerImageRemovedFromGalleryTrackingEvent>;
//# sourceMappingURL=DesignerImageRemovedFromGalleryTrackingEvent.d.ts.map