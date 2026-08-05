import { z } from "zod";
declare const _ProductContent: z.ZodObject<{
    breadcrumbs: z.ZodOptional<z.ZodArray<import("./Breadcrumb.js").BreadcrumbSchema>>;
    longDescription: z.ZodOptional<z.ZodString>;
    metaDescription: z.ZodOptional<z.ZodString>;
    metaKeywords: z.ZodOptional<z.ZodString>;
    metaTitle: z.ZodOptional<z.ZodString>;
    seoDescription: z.ZodOptional<z.ZodString>;
    shortDescription: z.ZodOptional<z.ZodString>;
    shortName: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _ProductContentSchema = typeof _ProductContent;
export interface ProductContentSchema extends _ProductContentSchema {
}
export declare const ProductContent: ProductContentSchema;
export type ProductContent = z.infer<typeof ProductContent>;
export {};
//# sourceMappingURL=ProductContent.d.ts.map