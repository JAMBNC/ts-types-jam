import { z } from "zod";

export const DesignerAddTextTrackingEvent = z
  .object({
    event: z.literal("designer_add_text"),
    payload: z.record(z.string(), z.never()),
  })
  .strict();
export type DesignerAddTextTrackingEvent = z.infer<
  typeof DesignerAddTextTrackingEvent
>;
