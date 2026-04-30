import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerAddImageTrackingEvent = z
    .object({
    event: z.literal("designer_add_image"),
    payload: DefaultTrackingPayload,
})
    .strict();
