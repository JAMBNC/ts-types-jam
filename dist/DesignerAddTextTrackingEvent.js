import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerAddTextTrackingEvent = z
    .object({
    event: z.literal("designer_add_text"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerAddTextTrackingEvent = _DesignerAddTextTrackingEvent;
