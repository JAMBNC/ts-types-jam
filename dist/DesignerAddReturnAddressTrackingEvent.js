import { z } from "zod";
import { DefaultTrackingPayload } from "./DefaultTrackingPayload.js";
const _DesignerAddReturnAddressTrackingEvent = z
    .object({
    event: z.literal("designer_add_return_address"),
    payload: DefaultTrackingPayload,
})
    .strict();
export const DesignerAddReturnAddressTrackingEvent = _DesignerAddReturnAddressTrackingEvent;
