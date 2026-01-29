import { z } from "zod";
export declare const DesignerImageEndpoints: z.ZodObject<{
    gallery: z.ZodString;
    upload: z.ZodString;
    delete: z.ZodString;
    rendition: z.ZodString;
}, z.core.$strip>;
export type DesignerImageEndpoints = z.infer<typeof DesignerImageEndpoints>;
//# sourceMappingURL=DesignerImageEndpoints.d.ts.map