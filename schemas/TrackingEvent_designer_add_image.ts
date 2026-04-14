import { z } from "zod";

export const TrackingEvent_designer_add_image = z
  .object({
    event: z.literal("designer_add_image"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type TrackingEvent_designer_add_image = z.infer<
  typeof TrackingEvent_designer_add_image
>;
