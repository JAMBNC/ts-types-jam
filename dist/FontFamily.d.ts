import { z } from "zod";
/**A collection of fonts that make up a font family.*/
export declare const FontFamily: z.ZodObject<{
    familyName: z.ZodString;
    fonts: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        style: z.ZodEnum<{
            regular: "regular";
            italic: "italic";
            bold: "bold";
            bold_italic: "bold_italic";
            light: "light";
            light_italic: "light_italic";
        }>;
        name: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type FontFamily = z.infer<typeof FontFamily>;
//# sourceMappingURL=FontFamily.d.ts.map