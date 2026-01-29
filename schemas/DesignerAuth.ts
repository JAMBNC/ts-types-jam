import { z } from "zod";

export const DesignerAuth = z.object({
  /**The authorization token for CHILI requests*/
  chiliAuth: z.string().describe("The authorization token for CHILI requests"),
  /**The authorization token for designer endpoint requests*/
  endpointAuth: z
    .string()
    .describe("The authorization token for designer endpoint requests")
    .optional(),
});
export type DesignerAuth = z.infer<typeof DesignerAuth>;
