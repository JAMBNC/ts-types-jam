import { z } from "zod/v4";

export const ColorPalette = z
  .any()
  .describe("Schema definition for a color palette");
export type ColorPalette = z.infer<typeof ColorPalette>;
