import { z } from "zod";
export declare const ColorPalette: z.ZodObject<{
    colors: z.ZodArray<z.ZodString>;
    process: z.ZodOptional<z.ZodEnum<{
        offset: "offset";
        digital: "digital";
        foil: "foil";
        emboss: "emboss";
        screen: "screen";
        inkjet: "inkjet";
        flexography: "flexography";
        sublimation: "sublimation";
        thermal: "thermal";
    }>>;
    name: z.ZodString;
    uuid: z.ZodString;
}, z.core.$loose>;
export type ColorPalette = z.infer<typeof ColorPalette>;
//# sourceMappingURL=ColorPalette.d.ts.map