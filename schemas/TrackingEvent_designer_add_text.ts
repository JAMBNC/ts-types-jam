import { z } from "zod";

export const TrackingEvent_designer_add_text = z
  .object({
    event: z.literal("designer_add_text"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type TrackingEvent_designer_add_text = z.infer<
  typeof TrackingEvent_designer_add_text
>;
