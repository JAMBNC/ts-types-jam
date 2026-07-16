import { z } from "zod";
/**The style of the font.*/
export declare const FontStyle: z.ZodEnum<{
    bold: "bold";
    bold_italic: "bold_italic";
    italic: "italic";
    light: "light";
    light_italic: "light_italic";
    regular: "regular";
}>;
export type FontStyle = z.infer<typeof FontStyle>;
//# sourceMappingURL=FontStyle.d.ts.map