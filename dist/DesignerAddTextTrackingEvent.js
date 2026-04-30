import { z } from "zod";
export const DesignerAddTextTrackingEvent = z
    .object({ event: z.literal("designer_add_text"), payload: z.any() })
    .strict();
