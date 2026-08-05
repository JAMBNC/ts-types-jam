import { z } from "zod";

export const FoilStampAdderCode = z.enum([
  "foil_stamp_1",
  "foil_stamp_2",
  "foil_stamp_3",
  "foil_stamp_4",
  "foil_stamp_5",
  "foil_stamp_6",
  "foil_stamp_7",
]);
export type FoilStampAdderCode = z.infer<typeof FoilStampAdderCode>;
