import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerDesignStartedTrackingEvent = z
    .object({
    event: z.literal("designer_design_started"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerDesignStartedTrackingEvent = _DesignerDesignStartedTrackingEvent;
