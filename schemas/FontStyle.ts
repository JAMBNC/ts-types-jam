import { z } from "zod";

const _FontStyle = z
  .enum(["regular", "italic", "bold", "bold_italic", "light", "light_italic"])
  .describe("The style of the font.");
type _FontStyleSchema = typeof _FontStyle;
export interface FontStyleSchema extends _FontStyleSchema {}
/**The style of the font.*/
export const FontStyle: FontStyleSchema = _FontStyle;
export type FontStyle = z.infer<typeof FontStyle>;
