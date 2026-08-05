import { z } from "zod";
import { Breadcrumb } from "./Breadcrumb.js";

const _ProductContent = z
  .object({
    breadcrumbs: z.array(Breadcrumb).optional(),
    longDescription: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    metaTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    shortDescription: z.string().optional(),
    shortName: z.string().optional(),
  })
  .passthrough();
type _ProductContentSchema = typeof _ProductContent;
export interface ProductContentSchema extends _ProductContentSchema {}
export const ProductContent: ProductContentSchema = _ProductContent;
export type ProductContent = z.infer<typeof ProductContent>;
