import { z } from "zod";

/**Event emitted when the user requests a login.*/
export const DesignerLoginEvent = z
  .object({
    type: z.literal("login"),
    payload: z.record(z.string(), z.never()),
  })
  .strict()
  .describe("Event emitted when the user requests a login.");
export type DesignerLoginEvent = z.infer<typeof DesignerLoginEvent>;
