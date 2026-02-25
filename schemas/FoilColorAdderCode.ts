import { z } from "zod";

export const FoilColorAdderCode = z.enum([
  "foil_first_color",
  "foil_second_color",
  "foil_third_color",
  "foil_fourth_color",
  "foil_fifth_color",
]);
export type FoilColorAdderCode = z.infer<typeof FoilColorAdderCode>;
