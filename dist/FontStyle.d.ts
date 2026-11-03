import { z } from "zod";
declare const _FontStyle: z.ZodEnum<{
    bold: "bold";
    regular: "regular";
    italic: "italic";
    bold_italic: "bold_italic";
    light: "light";
    light_italic: "light_italic";
}>;
type _FontStyleSchema = typeof _FontStyle;
export interface FontStyleSchema extends _FontStyleSchema {
}
/**The style of the font.*/
export declare const FontStyle: FontStyleSchema;
export type FontStyle = z.infer<typeof FontStyle>;
export {};
//# sourceMappingURL=FontStyle.d.ts.map