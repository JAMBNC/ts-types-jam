import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerRemoveCoatingTrackingEvent = z
    .object({
    event: z.literal("designer_remove_coating"),
    payload: DefaultTrackingPayload,
})
    .strict();
