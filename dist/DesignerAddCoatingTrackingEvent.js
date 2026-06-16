import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerAddCoatingTrackingEvent = z
    .object({
    event: z.literal("designer_add_coating"),
    payload: DefaultTrackingPayload,
})
    .strict();
