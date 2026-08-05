import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerRemoveCoatingTrackingEvent = z
    .object({
    event: z.literal("designer_remove_coating"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerRemoveCoatingTrackingEvent = _DesignerRemoveCoatingTrackingEvent;
