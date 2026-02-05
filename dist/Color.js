import { z } from "zod";
import { ColorValue } from "./ColorValue.js";
export const Color = z
    .object({
    /**The normalized name for a color, used for spot name in spot applications.*/
    name: z
        .string()
        .describe("The normalized name for a color, used for spot name in spot applications."),
    /**Color representations keyed by color space name.*/
    representations: z
        .object({ sRGB: ColorValue, US_Web_Coated_SWOP_v2: ColorValue })
        .partial()
        .describe("Color representations keyed by color space name."),
    /**A unique UUID identifier for the color.*/
    uuid: z.string().uuid().describe("A unique UUID identifier for the color."),
})
    .passthrough();
