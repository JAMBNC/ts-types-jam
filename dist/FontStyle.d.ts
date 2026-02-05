import { z } from "zod";
/**The style of the font.*/
export declare const FontStyle: z.ZodEnum<{
    bold: "bold";
    regular: "regular";
    italic: "italic";
    bold_italic: "bold_italic";
    light: "light";
    light_italic: "light_italic";
}>;
export type FontStyle = z.infer<typeof FontStyle>;
//# sourceMappingURL=FontStyle.d.ts.map