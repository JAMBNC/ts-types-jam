import { z } from "zod";

export const TrackingEvent_designer_add_mailing_address = z
  .object({
    event: z.literal("designer_add_mailing_address"),
    payload: z.object({ type: z.enum(["single", "variable"]) }).strict(),
  })
  .strict();
export type TrackingEvent_designer_add_mailing_address = z.infer<
  typeof TrackingEvent_designer_add_mailing_address
>;
