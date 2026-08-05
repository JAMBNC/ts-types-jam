import { z } from "zod";

const _FoilStampAdderCode = z.enum([
  "foil_stamp_1",
  "foil_stamp_2",
  "foil_stamp_3",
  "foil_stamp_4",
  "foil_stamp_5",
  "foil_stamp_6",
  "foil_stamp_7",
]);
type _FoilStampAdderCodeSchema = typeof _FoilStampAdderCode;
export interface FoilStampAdderCodeSchema extends _FoilStampAdderCodeSchema {}
export const FoilStampAdderCode: FoilStampAdderCodeSchema = _FoilStampAdderCode;
export type FoilStampAdderCode = z.infer<typeof FoilStampAdderCode>;
