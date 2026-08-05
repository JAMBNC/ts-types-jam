import { z } from "zod";
import { ProductUrlMetaDataCreativeEngine } from "./ProductUrlMetaDataCreativeEngine.js";
import { ProductUrlMetaDataDesigner } from "./ProductUrlMetaDataDesigner.js";
const _ProductUrlMetaData = z
    .object({
    creativeEngine: ProductUrlMetaDataCreativeEngine.optional(),
    designer: ProductUrlMetaDataDesigner.optional(),
})
    .passthrough();
export const ProductUrlMetaData = _ProductUrlMetaData;
