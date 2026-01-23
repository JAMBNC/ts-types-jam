import { z } from "zod/v4";
export declare const DesignerEndpoints: z.ZodObject<{
    design: z.ZodObject<{
        save: z.ZodString;
    }, z.core.$strip>;
    image: z.ZodOptional<z.ZodObject<{
        gallery: z.ZodOptional<z.ZodString>;
        upload: z.ZodOptional<z.ZodString>;
        delete: z.ZodOptional<z.ZodString>;
        rendition: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    fonts: z.ZodOptional<z.ZodObject<{
        all: z.ZodOptional<z.ZodString>;
        get: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
//# sourceMappingURL=DesignerEndpoints.d.ts.map