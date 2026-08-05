import { z } from "zod";

const _ProductUrlMetaDataCreativeEngine = z.enum(["chili", "alchemy"]);
type _ProductUrlMetaDataCreativeEngineSchema =
  typeof _ProductUrlMetaDataCreativeEngine;
export interface ProductUrlMetaDataCreativeEngineSchema extends _ProductUrlMetaDataCreativeEngineSchema {}
export const ProductUrlMetaDataCreativeEngine: ProductUrlMetaDataCreativeEngineSchema =
  _ProductUrlMetaDataCreativeEngine;
export type ProductUrlMetaDataCreativeEngine = z.infer<
  typeof ProductUrlMetaDataCreativeEngine
>;
