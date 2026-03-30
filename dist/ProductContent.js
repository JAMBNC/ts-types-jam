import { z } from "zod";
import { Breadcrumb } from "./Breadcrumb.js";
export const ProductContent = z
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
