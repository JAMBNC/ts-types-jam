import { z } from "zod";

export const DesignerColorEndpoints = z
  .object({
    /**The (optional) endpoint URL for retrieving all supported colors + palettes*/
    all: z
      .string()
      .url()
      .describe(
        "The (optional) endpoint URL for retrieving all supported colors + palettes",
      ),
  })
  .strict();
export type DesignerColorEndpoints = z.infer<typeof DesignerColorEndpoints>;
