import { z } from "zod";

export const DesignerVendorEndpoints = z
  .object({
    /**The endpoint URL for retrieving all supported vendor colors*/
    colors: z
      .string()
      .url()
      .describe("The endpoint URL for retrieving all supported vendor colors")
      .optional(),
  })
  .strict();
export type DesignerVendorEndpoints = z.infer<typeof DesignerVendorEndpoints>;
