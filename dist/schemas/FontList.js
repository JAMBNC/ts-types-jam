import { z } from "zod";
import { FontFamily } from "./FontFamily.js";
/**A collection of font families available in the system.*/
export const FontList = z
    .array(FontFamily)
    .describe("A collection of font families available in the system.");
