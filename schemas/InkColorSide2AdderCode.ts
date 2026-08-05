import { z } from "zod";

const _InkColorSide2AdderCode = z.enum([
  "color_side2_one_color",
  "color_side2_two_color",
  "color_side2_three_color",
  "color_side2_four_color",
  "color_side2_cmyk",
]);
type _InkColorSide2AdderCodeSchema = typeof _InkColorSide2AdderCode;
export interface InkColorSide2AdderCodeSchema extends _InkColorSide2AdderCodeSchema {}
export const InkColorSide2AdderCode: InkColorSide2AdderCodeSchema =
  _InkColorSide2AdderCode;
export type InkColorSide2AdderCode = z.infer<typeof InkColorSide2AdderCode>;
