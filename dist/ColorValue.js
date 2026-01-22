import { z } from "zod/v4";
export const ColorValue = z
    .array(z.number())
    .min(3)
    .max(4)
    .describe("The numeric value of a color, dependent on the color model/color space.");
