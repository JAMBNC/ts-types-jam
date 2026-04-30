import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerAddTextTrackingEvent = z
    .object({
    event: z.literal("designer_add_text"),
    payload: DefaultTrackingPayload,
})
    .strict();
