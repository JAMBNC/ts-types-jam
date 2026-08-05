import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerAddImageTrackingEvent = z
    .object({
    event: z.literal("designer_add_image"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerAddImageTrackingEvent = _DesignerAddImageTrackingEvent;
