import { z } from "zod";
const _Breadcrumb = z
    .object({ label: z.string(), url: z.string().optional() })
    .passthrough();
export const Breadcrumb = _Breadcrumb;
