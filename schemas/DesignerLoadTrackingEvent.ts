import { z } from "zod";

export const DesignerLoadTrackingEvent = z
  .object({
    event: z.literal("designer_load"),
    payload: z
      .object({ loadTime: z.number(), productUrl: z.string().url().optional() })
      .passthrough()
      .and(
        z
          .object({
            /**An analytics/tracking code to help id the designer event source.*/
            designer: z
              .enum(["base", "hermes"])
              .describe(
                "An analytics/tracking code to help id the designer event source.",
              ),
            /**An analytics/tracking code to help id the merchant for the event.*/
            merchant: z
              .string()
              .describe(
                "An analytics/tracking code to help id the merchant for the event.",
              ),
            /**Time since the initial load in seconds*/
            deltaTime: z
              .number()
              .describe("Time since the initial load in seconds"),
          })
          .passthrough()
          .describe("Event properties shared between many events"),
      ),
  })
  .strict();
export type DesignerLoadTrackingEvent = z.infer<
  typeof DesignerLoadTrackingEvent
>;
