import { z } from "zod";
/**A defined set of colors with a given name.*/
export declare const ColorPalette: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    colors: z.ZodArray<z.ZodString>;
}, z.core.$strict>;
export type ColorPalette = z.infer<typeof ColorPalette>;
//# sourceMappingURL=ColorPalette.d.ts.map