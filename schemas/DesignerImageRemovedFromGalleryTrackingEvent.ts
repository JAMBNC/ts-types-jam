import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

const _DesignerImageRemovedFromGalleryTrackingEvent = z
  .object({
    event: z.literal("designer_image_removed_from_gallery"),
    payload: DefaultTrackingPayload,
  })
  .strict();
type _DesignerImageRemovedFromGalleryTrackingEventSchema =
  typeof _DesignerImageRemovedFromGalleryTrackingEvent;
export interface DesignerImageRemovedFromGalleryTrackingEventSchema extends _DesignerImageRemovedFromGalleryTrackingEventSchema {}
export const DesignerImageRemovedFromGalleryTrackingEvent: DesignerImageRemovedFromGalleryTrackingEventSchema =
  _DesignerImageRemovedFromGalleryTrackingEvent;
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<
  typeof DesignerImageRemovedFromGalleryTrackingEvent
>;
