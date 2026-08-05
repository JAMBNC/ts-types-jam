import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerImageRemovedFromGalleryTrackingEvent = z
    .object({
    event: z.literal("designer_image_removed_from_gallery"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerImageRemovedFromGalleryTrackingEvent = _DesignerImageRemovedFromGalleryTrackingEvent;
