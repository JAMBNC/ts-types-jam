import { z } from "zod/v4";

export const DesignerFontEndpoints = z.object({
  all: z
    .string()
    .url()
    .describe("The (optional) endpoint URL for retrieving all supported fonts")
    .optional(),
  get: z
    .string()
    .url()
    .describe("The endpoint URL for retrieving a font file by uuid "),
});
export type DesignerFontEndpoints = z.infer<typeof DesignerFontEndpoints>;
