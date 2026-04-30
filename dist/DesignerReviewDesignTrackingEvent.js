import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerReviewDesignTrackingEvent = z
    .object({
    event: z.literal("designer_review_design"),
    payload: DefaultTrackingPayload,
})
    .strict();
