import { z } from "zod";

const _LayoutAdderCode = z.enum([
  "orientation_portrait",
  "orientation_landscape",
]);
type _LayoutAdderCodeSchema = typeof _LayoutAdderCode;
export interface LayoutAdderCodeSchema extends _LayoutAdderCodeSchema {}
export const LayoutAdderCode: LayoutAdderCodeSchema = _LayoutAdderCode;
export type LayoutAdderCode = z.infer<typeof LayoutAdderCode>;
