import { z } from "zod/v4";

export const ColorPalette = z
  .object({
    uuid: z
      .string()
      .uuid()
      .describe("A unique UUID identifier for the palette."),
    name: z.string().describe("The name for the color palette."),
    colors: z
      .array(z.string().uuid())
      .describe("A list of color uuids found within the palette."),
  })
  .strict()
  .describe("A defined set of colors with a given name.");
export type ColorPalette = z.infer<typeof ColorPalette>;
