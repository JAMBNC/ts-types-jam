import { z } from "zod";
export declare const ColorPalette: z.ZodObject<{
    colors: z.ZodArray<z.ZodString>;
    name: z.ZodString;
    uuid: z.ZodString;
}, z.core.$loose>;
export type ColorPalette = z.infer<typeof ColorPalette>;
//# sourceMappingURL=ColorPalette.d.ts.map