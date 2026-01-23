import { z } from "zod/v4";

export const ColorPalette = z
  .object({
    uuid: z
      .string()
      .uuid()
      .describe("A unique UUID identifier for the palette."),
    name: z.string().describe("The name for the color palette."),
    colors: z
      .array(
        z
          .object({
            uuid: z
              .string()
              .uuid()
              .describe("A unique UUID identifier for the color."),
            name: z
              .string()
              .describe(
                "The normalized name for a color, used for spot name in spot applications.",
              ),
            representations: z
              .record(
                z.string(),
                z
                  .array(z.number())
                  .min(3)
                  .max(4)
                  .describe(
                    "The numeric value of a color, dependent on the color model/color space.",
                  ),
              )
              .describe("Color representations keyed by color space name."),
          })
          .strict()
          .describe(
            "A standalone color object that serves as a way to represent a visual impression on a medium.",
          ),
      )
      .describe("A list of colors within the palette."),
  })
  .strict()
  .describe("A defined set of colors with a given name.");
export type ColorPalette = z.infer<typeof ColorPalette>;
