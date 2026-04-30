import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
export const DesignerAddReturnAddressTrackingEvent = z
    .object({
    event: z.literal("designer_add_return_address"),
    payload: DefaultTrackingPayload,
})
    .strict();
