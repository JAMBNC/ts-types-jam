import { z } from "zod";
import { ColorSpaceName } from "./ColorSpaceName.js";
import { ColorValue } from "./ColorValue.js";

const _Color = z
  .object({
    /**The normalized name for a color, used for spot name in spot applications.*/
    name: z
      .string()
      .describe(
        "The normalized name for a color, used for spot name in spot applications.",
      ),
    /**Color representations keyed by color space name.*/
    representations: z
      .object({
        sRGB: ColorValue,
        US_Web_Coated_SWOP_v2: ColorValue,
        CIELAB: ColorValue,
      })
      .partial()
      .describe("Color representations keyed by color space name."),
    /**A unique UUID identifier for the color.*/
    uuid: z
      .string()
      .regex(
        /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      )
      .describe("A unique UUID identifier for the color."),
  })
  .passthrough();
type _ColorSchema = typeof _Color;
export interface ColorSchema extends _ColorSchema {}
export const Color: ColorSchema = _Color;
export type Color = z.infer<typeof Color>;
