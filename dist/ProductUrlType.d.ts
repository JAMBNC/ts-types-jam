import { z } from "zod";
declare const _ProductUrlType: z.ZodEnum<{
    customProduct: "customProduct";
    product: "product";
    yourLogoHere: "yourLogoHere";
}>;
type _ProductUrlTypeSchema = typeof _ProductUrlType;
export interface ProductUrlTypeSchema extends _ProductUrlTypeSchema {
}
export declare const ProductUrlType: ProductUrlTypeSchema;
export type ProductUrlType = z.infer<typeof ProductUrlType>;
export {};
//# sourceMappingURL=ProductUrlType.d.ts.map