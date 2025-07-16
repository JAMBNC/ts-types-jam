import { z } from "zod/v4";
export declare const ProductContent: z.ZodObject<{
    breadcrumbs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    longDescription: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
    metaKeywords: z.ZodOptional<z.ZodString>;
    metaTitle: z.ZodOptional<z.ZodString>;
    seoDescription: z.ZodOptional<z.ZodString>;
    shortDescription: z.ZodOptional<z.ZodString>;
    shortName: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductContent = z.infer<typeof ProductContent>;
//# sourceMappingURL=ProductContent.d.ts.map