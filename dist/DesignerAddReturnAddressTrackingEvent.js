import { z } from "zod";
export const DesignerAddReturnAddressTrackingEvent = z
    .object({
    event: z.literal("designer_add_return_address"),
    payload: z.record(z.string(), z.never()),
})
    .strict();
