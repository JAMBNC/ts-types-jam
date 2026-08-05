import { z } from "zod";
import { ProductUrlMetaData } from "./ProductUrlMetaData.js";
import { ProductUrlType } from "./ProductUrlType.js";

const _ProductUrl = z
  .object({
    metaData: ProductUrlMetaData.optional(),
    url: z.string().optional(),
    urlType: ProductUrlType.optional(),
  })
  .passthrough();
type _ProductUrlSchema = typeof _ProductUrl;
export interface ProductUrlSchema extends _ProductUrlSchema {}
export const ProductUrl: ProductUrlSchema = _ProductUrl;
export type ProductUrl = z.infer<typeof ProductUrl>;
