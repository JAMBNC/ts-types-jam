import { z } from "zod";

export const DesignerLoadTrackingEvent = z
  .object({
    event: z.literal("designer_load"),
    payload: z
      .object({
        loadTime: z.number(),
        designer: z.enum(["base", "hermes"]),
        productUrl: z.string().url().optional(),
      })
      .strict(),
  })
  .strict();
export type DesignerLoadTrackingEvent = z.infer<
  typeof DesignerLoadTrackingEvent
>;
