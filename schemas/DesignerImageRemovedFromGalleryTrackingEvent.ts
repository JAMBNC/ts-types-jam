import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

export const DesignerImageRemovedFromGalleryTrackingEvent = z
  .object({
    event: z.literal("designer_image_removed_from_gallery"),
    payload: DefaultTrackingPayload,
  })
  .strict();
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<
  typeof DesignerImageRemovedFromGalleryTrackingEvent
>;
