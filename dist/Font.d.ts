import { z } from "zod";
/**Schema for a single font used throughout the system.*/
export declare const Font: z.ZodObject<{
    format: z.ZodOptional<z.ZodEnum<{
        otf: "otf";
        ttf: "ttf";
    }>>;
    family: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    previewImageUrl: z.ZodOptional<z.ZodString>;
    priority: z.ZodOptional<z.ZodNumber>;
    style: z.ZodEnum<{
        bold: "bold";
        bold_italic: "bold_italic";
        italic: "italic";
        light: "light";
        light_italic: "light_italic";
        regular: "regular";
    }>;
    url: z.ZodOptional<z.ZodString>;
    uuid: z.ZodString;
    id: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export type Font = z.infer<typeof Font>;
//# sourceMappingURL=Font.d.ts.map