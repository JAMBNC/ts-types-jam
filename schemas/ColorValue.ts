import { z } from "zod";

const _ColorValue = z
  .array(z.number())
  .min(3)
  .max(4)
  .describe(
    "The numeric value of a color, dependent on the color model/color space.",
  );
type _ColorValueSchema = typeof _ColorValue;
export interface ColorValueSchema extends _ColorValueSchema {}
/**The numeric value of a color, dependent on the color model/color space.*/
export const ColorValue: ColorValueSchema = _ColorValue;
export type ColorValue = z.infer<typeof ColorValue>;
