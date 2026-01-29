import { z } from "zod";

export const ProductUrlMetaDataCreativeEngine = z.enum(["chili", "alchemy"]);
export type ProductUrlMetaDataCreativeEngine = z.infer<
  typeof ProductUrlMetaDataCreativeEngine
>;
