import { z } from "zod";

export const AnalyzedVendor = z
  .object({
    identifier: z.string(),
    pms: z.number(),
    cmyk: z.boolean(),
    white: z.boolean(),
    black: z.boolean(),
    foilColors: z.number(),
    foilStamps: z.number(),
  })
  .passthrough();
export type AnalyzedVendor = z.infer<typeof AnalyzedVendor>;
