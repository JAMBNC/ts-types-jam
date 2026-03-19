import { z } from "zod";

export const ProductUrlMetaDataDesigner = z.enum(["chili", "luma", "hermes"]);
export type ProductUrlMetaDataDesigner = z.infer<
  typeof ProductUrlMetaDataDesigner
>;
