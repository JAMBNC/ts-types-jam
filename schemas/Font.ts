import { z } from "zod";

/**The schema required for a single font used throughout the system.*/
export const Font = z
  .object({
    /**A unique UUID identifier for the font. Used to retrieve the font.*/
    uuid: z
      .string()
      .uuid()
      .describe(
        "A unique UUID identifier for the font. Used to retrieve the font.",
      ),
    /**The style of the font.*/
    style: z
      .enum([
        "regular",
        "italic",
        "bold",
        "bold_italic",
        "light",
        "light_italic",
      ])
      .describe("The style of the font."),
    /**The name of the font. Can also inferred from the family + style*/
    name: z
      .string()
      .describe(
        "The name of the font. Can also inferred from the family + style",
      )
      .optional(),
  })
  .strict()
  .describe(
    "The schema required for a single font used throughout the system.",
  );
export type Font = z.infer<typeof Font>;
