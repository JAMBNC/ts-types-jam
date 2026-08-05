import { z } from "zod";
const _FontStyle = z
    .enum(["regular", "italic", "bold", "bold_italic", "light", "light_italic"])
    .describe("The style of the font.");
/**The style of the font.*/
export const FontStyle = _FontStyle;
