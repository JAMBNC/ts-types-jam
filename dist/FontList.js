import { z } from "zod";
import { FontFamily } from "./FontFamily.js";
const _FontList = z
    .array(FontFamily)
    .describe("A collection of font families available in the system.");
/**A collection of font families available in the system.*/
export const FontList = _FontList;
