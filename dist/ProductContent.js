import { z } from "zod/v4";
export const ProductContent = z.object({
    breadcrumbs: z
        .array(z.object({ label: z.string(), url: z.string().optional() }))
        .optional(),
    longDescription: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    metaTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    shortDescription: z.string().optional(),
    shortName: z.string().optional(),
});
