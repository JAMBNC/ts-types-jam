import { z } from "zod";

/**The style of the font.*/
export const FontStyle = z
  .enum(["regular", "italic", "bold", "bold_italic", "light", "light_italic"])
  .describe("The style of the font.");
export type FontStyle = z.infer<typeof FontStyle>;
