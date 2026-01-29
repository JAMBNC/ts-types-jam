import { z } from "zod";
export declare const DesignerEndpoints: z.ZodObject<{
    design: z.ZodObject<{
        save: z.ZodString;
    }, z.core.$strip>;
    image: z.ZodObject<{
        gallery: z.ZodString;
        upload: z.ZodString;
        delete: z.ZodString;
        rendition: z.ZodString;
    }, z.core.$strip>;
    fonts: z.ZodObject<{
        all: z.ZodOptional<z.ZodString>;
        get: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
//# sourceMappingURL=DesignerEndpoints.d.ts.map