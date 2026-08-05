import { z } from "zod";
declare const _Breadcrumb: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _BreadcrumbSchema = typeof _Breadcrumb;
export interface BreadcrumbSchema extends _BreadcrumbSchema {
}
export declare const Breadcrumb: BreadcrumbSchema;
export type Breadcrumb = z.infer<typeof Breadcrumb>;
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map