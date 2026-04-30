import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

export const DesignerImageUploadedTrackingEvent = z
  .object({
    event: z.literal("designer_image_uploaded"),
    payload: DefaultTrackingPayload,
  })
  .strict();
export type DesignerImageUploadedTrackingEvent = z.infer<
  typeof DesignerImageUploadedTrackingEvent
>;
