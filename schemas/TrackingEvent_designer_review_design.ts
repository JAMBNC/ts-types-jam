import { z } from "zod";

export const TrackingEvent_designer_review_design = z
  .object({
    event: z.literal("designer_review_design"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type TrackingEvent_designer_review_design = z.infer<
  typeof TrackingEvent_designer_review_design
>;
