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
export const FoilColorAdderCode = _FoilColorAdderCode;
