import { z } from "zod";

const _ProductUrlMetaDataDesigner = z.enum(["chili", "luma", "hermes"]);
type _ProductUrlMetaDataDesignerSchema = typeof _ProductUrlMetaDataDesigner;
export interface ProductUrlMetaDataDesignerSchema extends _ProductUrlMetaDataDesignerSchema {}
export const ProductUrlMetaDataDesigner: ProductUrlMetaDataDesignerSchema =
  _ProductUrlMetaDataDesigner;
export type ProductUrlMetaDataDesigner = z.infer<
  typeof ProductUrlMetaDataDesigner
>;
