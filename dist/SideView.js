import { z } from "zod";
export const SideView = z
    .object({
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
    foil1: z.string(),
    foil2: z.string(),
    foil3: z.string(),
})
    .passthrough();
