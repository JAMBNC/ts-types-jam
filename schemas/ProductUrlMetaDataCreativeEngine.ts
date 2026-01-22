import { z } from "zod/v4";

export const ProductUrlMetaDataCreativeEngine = z.enum(["chili", "alchemy"]);
export type ProductUrlMetaDataCreativeEngine = z.infer<
  typeof ProductUrlMetaDataCreativeEngine
>;
