import { z } from "zod";

export const PdfSide = z
  .object({
    cmyk: z.boolean(),
    pms: z.number(),
    white: z.boolean(),
    black: z.boolean(),
    miscPlates: z.array(z.any()),
    spotcolorPlates: z.array(z.string()),
    foils: z.array(z.any()),
  })
  .passthrough();
export type PdfSide = z.infer<typeof PdfSide>;
