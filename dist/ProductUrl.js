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
export const ProductUrl = _ProductUrl;
