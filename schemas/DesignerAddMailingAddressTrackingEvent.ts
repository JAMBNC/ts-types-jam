import { z } from "zod";

export const DesignerAddMailingAddressTrackingEvent = z
  .object({
    event: z.literal("designer_add_mailing_address"),
    payload: z.object({ type: z.enum(["single", "variable"]) }).strict(),
  })
  .strict();
export type DesignerAddMailingAddressTrackingEvent = z.infer<
  typeof DesignerAddMailingAddressTrackingEvent
>;
