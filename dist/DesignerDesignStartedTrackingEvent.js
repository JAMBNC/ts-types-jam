import { z } from "zod";
export const DesignerDesignStartedTrackingEvent = z
    .object({ event: z.literal("designer_design_started"), payload: z.any() })
    .strict();
