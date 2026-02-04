import { z } from "zod";
export const Color = z
    .object({
    /**The normalized name for a color, used for spot name in spot applications.*/
    name: z
        .string()
        .describe("The normalized name for a color, used for spot name in spot applications."),
    /**Color representations keyed by color space name.*/
    representations: z
        .record(z
        .enum(["sRGB", "US_Web_Coated_SWOP_v2"])
        .describe("Known color space names."), z
        .array(z.number())
        .min(3)
        .max(4)
        .describe("The numeric value of a color, dependent on the color model/color space."))
        .describe("Color representations keyed by color space name."),
    /**A unique UUID identifier for the color.*/
    uuid: z.string().uuid().describe("A unique UUID identifier for the color."),
})
    .passthrough();
