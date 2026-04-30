import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";

export const DesignerDesignStartedTrackingEvent = z
  .object({
    event: z.literal("designer_design_started"),
    payload: DefaultTrackingPayload,
  })
  .strict();
export type DesignerDesignStartedTrackingEvent = z.infer<
  typeof DesignerDesignStartedTrackingEvent
>;
