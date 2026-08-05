import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerAddCoatingTrackingEvent = z
    .object({
    event: z.literal("designer_add_coating"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerAddCoatingTrackingEvent = _DesignerAddCoatingTrackingEvent;
