import { z } from "zod";
export declare const DesignerImageEndpoints: z.ZodObject<{
    gallery: z.ZodOptional<z.ZodString>;
    upload: z.ZodOptional<z.ZodString>;
    delete: z.ZodOptional<z.ZodString>;
    rendition: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DesignerImageEndpoints = z.infer<typeof DesignerImageEndpoints>;
//# sourceMappingURL=DesignerImageEndpoints.d.ts.map