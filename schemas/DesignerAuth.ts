import { z } from "zod";

export const DesignerAuth = z.object({
  chiliAuth: z
    .string()
    .describe("The authorization token for CHILI requests")
    .optional(),
  endpointAuth: z
    .string()
    .describe("The authorization token for designer endpoint requests")
    .optional(),
});
export type DesignerAuth = z.infer<typeof DesignerAuth>;
