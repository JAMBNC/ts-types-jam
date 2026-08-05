import { z } from "zod";

const _WhiteInkAdderCode = z.enum([
  "white_ink_side1",
  "white_ink_side2",
  "white_ink",
]);
type _WhiteInkAdderCodeSchema = typeof _WhiteInkAdderCode;
export interface WhiteInkAdderCodeSchema extends _WhiteInkAdderCodeSchema {}
export const WhiteInkAdderCode: WhiteInkAdderCodeSchema = _WhiteInkAdderCode;
export type WhiteInkAdderCode = z.infer<typeof WhiteInkAdderCode>;
