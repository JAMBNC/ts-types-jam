import { z } from "zod";
import { ProductUrlMetaDataCreativeEngine } from "./ProductUrlMetaDataCreativeEngine.js";
import { ProductUrlMetaDataDesigner } from "./ProductUrlMetaDataDesigner.js";
export const ProductUrlMetaData = z
    .object({
    creativeEngine: ProductUrlMetaDataCreativeEngine.optional(),
    designer: ProductUrlMetaDataDesigner.optional(),
})
    .passthrough();
