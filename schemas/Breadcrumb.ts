import { z } from "zod";

const _Breadcrumb = z
  .object({ label: z.string(), url: z.string().optional() })
  .passthrough();
type _BreadcrumbSchema = typeof _Breadcrumb;
export interface BreadcrumbSchema extends _BreadcrumbSchema {}
export const Breadcrumb: BreadcrumbSchema = _Breadcrumb;
export type Breadcrumb = z.infer<typeof Breadcrumb>;
