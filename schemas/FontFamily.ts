import { z } from "zod";
import { Font } from "./Font.js";

/**A collection of fonts that make up a font family.*/
export const FontFamily = z
  .object({
    /**The name of the font family.*/
    familyName: z.string().describe("The name of the font family."),
    /**An array of font entries that belong to this family.*/
    fonts: z
      .array(Font)
      .min(1)
      .describe("An array of font entries that belong to this family."),
  })
  .strict()
  .describe("A collection of fonts that make up a font family.");
export type FontFamily = z.infer<typeof FontFamily>;
