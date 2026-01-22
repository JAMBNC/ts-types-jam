import { z } from "zod/v4";

export const ProductUrlMetaData = z.object({
  creativeEngine: z.enum(["chili", "alchemy"]).optional(),
  designer: z.enum(["chili", "luma", "addrLogo"]).optional(),
});
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
