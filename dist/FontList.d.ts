import { z } from "zod";
/**A collection of font families available in the system.*/
export declare const FontList: z.ZodArray<z.ZodObject<{
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
}, z.core.$strict>>;
export type FontList = z.infer<typeof FontList>;
//# sourceMappingURL=FontList.d.ts.map