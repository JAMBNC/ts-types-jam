import { z } from "zod";

const _InkColorSide1AdderCode = z.enum([
  "color_side1_blk",
  "color_side1_std",
  "color_side1_pms",
  "color_side1_blk_std",
  "color_side1_blk_pms",
  "color_side1_2std",
  "color_side1_std_pms",
  "color_side1_2pms",
  "color_side1_blk_2std",
  "color_side1_blk_std_pms",
  "color_side1_blk_2pms",
  "color_side1_3std",
  "color_side1_2std_pms",
  "color_side1_std_2pms",
  "color_side1_3pms",
  "color_side1_blk_3std",
  "color_side1_blk_2std_pms",
  "color_side1_blk_std_2pms",
  "color_side1_blk_3pms",
  "color_side1_4std",
  "color_side1_3std_pms",
  "color_side1_2std_2pms",
  "color_side1_std_3pms",
  "color_side1_4pms",
  "color_side1_cmyk",
  "color_side1_white_ink",
]);
type _InkColorSide1AdderCodeSchema = typeof _InkColorSide1AdderCode;
export interface InkColorSide1AdderCodeSchema extends _InkColorSide1AdderCodeSchema {}
export const InkColorSide1AdderCode: InkColorSide1AdderCodeSchema =
  _InkColorSide1AdderCode;
export type InkColorSide1AdderCode = z.infer<typeof InkColorSide1AdderCode>;
