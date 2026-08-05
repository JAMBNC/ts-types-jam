import { z } from "zod";
declare const _ProductUrlMetaData: z.ZodObject<{
    creativeEngine: z.ZodOptional<import("./ProductUrlMetaDataCreativeEngine.js").ProductUrlMetaDataCreativeEngineSchema>;
    designer: z.ZodOptional<import("./ProductUrlMetaDataDesigner.js").ProductUrlMetaDataDesignerSchema>;
}, z.core.$loose>;
type _ProductUrlMetaDataSchema = typeof _ProductUrlMetaData;
export interface ProductUrlMetaDataSchema extends _ProductUrlMetaDataSchema {
}
export declare const ProductUrlMetaData: ProductUrlMetaDataSchema;
export type ProductUrlMetaData = z.infer<typeof ProductUrlMetaData>;
export {};
//# sourceMappingURL=ProductUrlMetaData.d.ts.map