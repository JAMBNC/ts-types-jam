import { z } from "zod/v4";

export const ProductUrlMetaDataDesigner = z.enum(["chili", "luma", "addrLogo"]);
export type ProductUrlMetaDataDesigner = z.infer<
  typeof ProductUrlMetaDataDesigner
>;
