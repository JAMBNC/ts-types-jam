import { z } from "zod";

/**Shipment tracking attached to a fulfillment. numbers holds one or more tracking numbers; company is the carrier name (channels that recognize it build clickable links).*/
export const TrackingInfo = z
  .object({
    company: z.union([z.string(), z.null()]),
    numbers: z.array(z.string().min(1)).min(1),
    url: z.union([z.string(), z.null()]).optional(),
  })
  .strict()
  .describe(
    "Shipment tracking attached to a fulfillment. numbers holds one or more tracking numbers; company is the carrier name (channels that recognize it build clickable links).",
  );
export type TrackingInfo = z.infer<typeof TrackingInfo>;
