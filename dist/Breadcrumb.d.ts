import { z } from "zod/v4";
export declare const Breadcrumb: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Breadcrumb = z.infer<typeof Breadcrumb>;
//# sourceMappingURL=Breadcrumb.d.ts.map