import { z } from "zod";
/**A collection of fonts that make up a font family.*/
export declare const FontFamily: z.ZodObject<{
    familyName: z.ZodString;
    fonts: z.ZodArray<z.ZodObject<{
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
            regular: "regular";
            italic: "italic";
            bold_italic: "bold_italic";
            light: "light";
            light_italic: "light_italic";
        }>;
        url: z.ZodOptional<z.ZodString>;
        uuid: z.ZodString;
        id: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type FontFamily = z.infer<typeof FontFamily>;
//# sourceMappingURL=FontFamily.d.ts.map