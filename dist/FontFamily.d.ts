import { z } from "zod";
declare const _FontFamily: z.ZodObject<{
    familyName: z.ZodString;
    fonts: z.ZodArray<import("./Font.js").FontSchema>;
}, z.core.$strict>;
type _FontFamilySchema = typeof _FontFamily;
export interface FontFamilySchema extends _FontFamilySchema {
}
/**A collection of fonts that make up a font family.*/
export declare const FontFamily: FontFamilySchema;
export type FontFamily = z.infer<typeof FontFamily>;
export {};
//# sourceMappingURL=FontFamily.d.ts.map