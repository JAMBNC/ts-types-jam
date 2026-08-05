import { z } from "zod";
import { ProductUrlMetaDataCreativeEngine } from "./ProductUrlMetaDataCreativeEngine.js";
import { ProductUrlMetaDataDesigner } from "./ProductUrlMetaDataDesigner.js";

const _ProductUrlMetaData = z
  .object({
    creativeEngine: ProductUrlMetaDataCreativeEngine.optional(),
    designer: ProductUrlMetaDataDesigner.optional(),
  })
  .passthrough();
type _ProductUrlMetaDataSchema = typeof _ProductUrlMetaData;
export interface ProductUrlMetaDataSchema extends _ProductUrlMetaDataSchema {}
export const ProductUrlMetaData: ProductUrlMetaDataSchema = _ProductUrlMetaData;
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
