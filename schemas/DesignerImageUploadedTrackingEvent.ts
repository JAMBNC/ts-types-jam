import { z } from "zod";

export const DesignerImageUploadedTrackingEvent = z
  .object({ event: z.literal("designer_image_uploaded"), payload: z.any() })
  .strict();
export type DesignerImageUploadedTrackingEvent = z.infer<
  typeof DesignerImageUploadedTrackingEvent
>;
