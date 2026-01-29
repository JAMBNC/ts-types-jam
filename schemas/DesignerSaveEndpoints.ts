import { z } from "zod";

export const DesignerSaveEndpoints = z.object({
  save: z
    .string()
    .url()
    .describe("The endpoint URL for saving the designer data"),
});
export type DesignerSaveEndpoints = z.infer<typeof DesignerSaveEndpoints>;
