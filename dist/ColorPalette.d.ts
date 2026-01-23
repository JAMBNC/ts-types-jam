import { z } from "zod/v4";
export declare const ColorPalette: z.ZodObject<{
    uuid: z.ZodString;
    name: z.ZodString;
    colors: z.ZodArray<z.ZodObject<{
        uuid: z.ZodString;
        name: z.ZodString;
        representations: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodNumber>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type ColorPalette = z.infer<typeof ColorPalette>;
//# sourceMappingURL=ColorPalette.d.ts.map