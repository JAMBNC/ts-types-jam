import { z } from "zod";
export const DesignerReviewDesignTrackingEvent = z
    .object({ event: z.literal("designer_review_design"), payload: z.any() })
    .strict();
