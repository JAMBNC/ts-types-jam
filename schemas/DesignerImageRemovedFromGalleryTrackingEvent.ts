import { z } from "zod";

export const DesignerImageRemovedFromGalleryTrackingEvent = z
  .object({
    event: z.literal("designer_image_removed_from_gallery"),
    payload: z.any(),
  })
  .strict();
export type DesignerImageRemovedFromGalleryTrackingEvent = z.infer<
  typeof DesignerImageRemovedFromGalleryTrackingEvent
>;
