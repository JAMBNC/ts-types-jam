import { z } from "zod";
import { Font } from "./Font.js";

const _FontFamily = z
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
type _FontFamilySchema = typeof _FontFamily;
export interface FontFamilySchema extends _FontFamilySchema {}
/**A collection of fonts that make up a font family.*/
export const FontFamily: FontFamilySchema = _FontFamily;
export type FontFamily = z.infer<typeof FontFamily>;
