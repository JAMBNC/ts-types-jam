import { z } from "zod";
export const ProductContent = z
    .object({
    breadcrumbs: z
        .array(z
        .object({ label: z.string(), url: z.string().optional() })
        .passthrough())
        .optional(),
    longDescription: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    metaTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    shortDescription: z.string().optional(),
    shortName: z.string().optional(),
})
    .passthrough();
