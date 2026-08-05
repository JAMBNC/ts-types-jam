import { z } from "zod";
import { FontFamily } from "./FontFamily.js";

const _FontList = z
  .array(FontFamily)
  .describe("A collection of font families available in the system.");
type _FontListSchema = typeof _FontList;
export interface FontListSchema extends _FontListSchema {}
/**A collection of font families available in the system.*/
export const FontList: FontListSchema = _FontList;
export type FontList = z.infer<typeof FontList>;
