import { z } from "zod";

const _FoilColorAdderCode = z.enum([
  "foil_first_color",
  "foil_second_color",
  "foil_third_color",
  "foil_fourth_color",
  "foil_fifth_color",
  "foil_sixth_color",
  "foil_seventh_color",
]);
type _FoilColorAdderCodeSchema = typeof _FoilColorAdderCode;
export interface FoilColorAdderCodeSchema extends _FoilColorAdderCodeSchema {}
export const FoilColorAdderCode: FoilColorAdderCodeSchema = _FoilColorAdderCode;
export type FoilColorAdderCode = z.infer<typeof FoilColorAdderCode>;
