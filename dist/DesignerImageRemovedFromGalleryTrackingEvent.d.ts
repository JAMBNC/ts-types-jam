import { z } from "zod";
declare const _DesignerImageRemovedFromGalleryTrackingEvent: z.ZodObject<{
    event: z.ZodLiteral<"designer_image_removed_from_gallery">;
    payload: import("./DefaultTrackingPayload.js").DefaultTrackingPayloadSchema;
}, z.core.$strict>;
type _DesignerImageRemovedFromGalleryTrackingEventSchema = typeof _DesignerImageRemovedFromGalleryTrackingEvent;
export interface DesignerImageRemovedFromGalleryTrackingEventSchema extends _DesignerImageRemovedFromGalleryTrackingEventSchema {
}
export declare const DesignerImageRemovedFromGalleryTrackingEvent: DesignerImageRemovedFromGalleryTrackingEventSchema;
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<typeof DesignerImageRemovedFromGalleryTrackingEvent>;
export {};
//# sourceMappingURL=DesignerImageRemovedFromGalleryTrackingEvent.d.ts.map