import { z } from "zod";

export const Side = z
  .object({
    foil1: z.string(),
    foil2: z.string(),
    foil3: z.string(),
    digital: z.boolean(),
    offset: z.number(),
    color1: z.string(),
    color2: z.string(),
    color3: z.string(),
  })
  .passthrough();
export type Side = z.infer<typeof Side>;
