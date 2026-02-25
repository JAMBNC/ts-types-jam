import { z } from "zod";
export declare const DesignerEndpoints: z.ZodObject<{
    image: z.ZodObject<{
        gallery: z.ZodString;
        upload: z.ZodString;
        delete: z.ZodString;
        rendition: z.ZodString;
    }, z.core.$strict>;
    fonts: z.ZodObject<{
        all: z.ZodString;
        get: z.ZodString;
    }, z.core.$strict>;
    colors: z.ZodObject<{
        all: z.ZodString;
        palettes: z.ZodString;
    }, z.core.$strict>;
    vendor: z.ZodOptional<z.ZodObject<{
        colors: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type DesignerEndpoints = z.infer<typeof DesignerEndpoints>;
//# sourceMappingURL=DesignerEndpoints.d.ts.map