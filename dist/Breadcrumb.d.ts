import { z } from "zod";
export declare const Breadcrumb: z.ZodObject<{
    label: z.ZodString;
    url: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type Breadcrumb = z.infer<typeof Breadcrumb>;
//# sourceMappingURL=Breadcrumb.d.ts.map