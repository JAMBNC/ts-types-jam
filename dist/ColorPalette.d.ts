import { z } from "zod";
declare const _ColorPalette: z.ZodObject<{
    colors: z.ZodArray<z.ZodString>;
    process: z.ZodOptional<import("./Process.js").ProcessSchema>;
    name: z.ZodString;
    uuid: z.ZodString;
}, z.core.$loose>;
type _ColorPaletteSchema = typeof _ColorPalette;
export interface ColorPaletteSchema extends _ColorPaletteSchema {
}
export declare const ColorPalette: ColorPaletteSchema;
export type ColorPalette = z.infer<typeof ColorPalette>;
export {};
//# sourceMappingURL=ColorPalette.d.ts.map