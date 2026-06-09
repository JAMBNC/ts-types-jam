import { z } from "zod";
/**Schema for a single font used throughout the system.*/
export declare const Font: z.ZodObject<{
    format: z.ZodOptional<z.ZodEnum<{
        otf: "otf";
        ttf: "ttf";
    }>>;
    name: z.ZodString;
    previewImageUrl: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodNumber>;
    style: z.ZodEnum<{
        regular: "regular";
        italic: "italic";
        bold: "bold";
        bold_italic: "bold_italic";
        light: "light";
        light_italic: "light_italic";
    }>;
    url: z.ZodOptional<z.ZodString>;
    uuid: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type Font = z.infer<typeof Font>;
//# sourceMappingURL=Font.d.ts.map