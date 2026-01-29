import { z } from "zod";

export const ProductUrlMetaDataDesigner = z.enum(["chili", "luma", "addrLogo"]);
export type ProductUrlMetaDataDesigner = z.infer<
  typeof ProductUrlMetaDataDesigner
>;
