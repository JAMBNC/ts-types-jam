import { z } from "zod";

const _ProductUrlType = z.enum(["product", "customProduct", "yourLogoHere"]);
type _ProductUrlTypeSchema = typeof _ProductUrlType;
export interface ProductUrlTypeSchema extends _ProductUrlTypeSchema {}
export const ProductUrlType: ProductUrlTypeSchema = _ProductUrlType;
export type ProductUrlType = z.infer<typeof ProductUrlType>;
