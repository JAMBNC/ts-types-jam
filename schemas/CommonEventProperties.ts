import { z } from "zod";

/**Event properties shared between many events*/
export const CommonEventProperties = z
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
    deltaTime: z.number().describe("Time since the initial load in seconds"),
  })
  .passthrough()
  .describe("Event properties shared between many events");
export type CommonEventProperties = z.infer<typeof CommonEventProperties>;
