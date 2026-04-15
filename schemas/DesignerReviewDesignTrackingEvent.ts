import { z } from "zod";

export const DesignerReviewDesignTrackingEvent = z
  .object({
    event: z.literal("designer_review_design"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type DesignerReviewDesignTrackingEvent = z.infer<
  typeof DesignerReviewDesignTrackingEvent
>;
