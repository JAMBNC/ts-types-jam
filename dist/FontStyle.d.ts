import { z } from "zod";
declare const _FontStyle: z.ZodEnum<{
    bold: "bold";
    bold_italic: "bold_italic";
    italic: "italic";
    light: "light";
    light_italic: "light_italic";
    regular: "regular";
}>;
type _FontStyleSchema = typeof _FontStyle;
export interface FontStyleSchema extends _FontStyleSchema {
}
/**The style of the font.*/
export declare const FontStyle: FontStyleSchema;
export type FontStyle = z.infer<typeof FontStyle>;
export {};
//# sourceMappingURL=FontStyle.d.ts.map