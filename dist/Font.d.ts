import { z } from "zod";
/**The schema required for a single font used throughout the system.*/
export declare const Font: z.ZodObject<{
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
}, z.core.$strict>;
export type Font = z.infer<typeof Font>;
//# sourceMappingURL=Font.d.ts.map