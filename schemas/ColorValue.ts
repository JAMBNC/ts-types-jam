import { z } from "zod";

/**The numeric value of a color, dependent on the color model/color space.*/
export const ColorValue = z
  .array(z.number())
  .min(3)
  .max(4)
  .describe(
    "The numeric value of a color, dependent on the color model/color space.",
  );
export type ColorValue = z.infer<typeof ColorValue>;
