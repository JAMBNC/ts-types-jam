import { z } from "zod";
declare const _ProductUrl: z.ZodObject<{
    metaData: z.ZodOptional<import("./ProductUrlMetaData.js").ProductUrlMetaDataSchema>;
    url: z.ZodOptional<z.ZodString>;
    urlType: z.ZodOptional<import("./ProductUrlType.js").ProductUrlTypeSchema>;
}, z.core.$loose>;
type _ProductUrlSchema = typeof _ProductUrl;
export interface ProductUrlSchema extends _ProductUrlSchema {
}
export declare const ProductUrl: ProductUrlSchema;
export type ProductUrl = z.infer<typeof ProductUrl>;
export {};
//# sourceMappingURL=ProductUrl.d.ts.map