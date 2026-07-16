import { z } from "zod";
export declare const ColorPalette: z.ZodObject<{
    colors: z.ZodArray<z.ZodString>;
    process: z.ZodOptional<z.ZodEnum<{
        digital: "digital";
        emboss: "emboss";
        flexography: "flexography";
        foil: "foil";
        inkjet: "inkjet";
        offset: "offset";
        screen: "screen";
        sublimation: "sublimation";
        thermal: "thermal";
    }>>;
    name: z.ZodString;
    uuid: z.ZodString;
}, z.core.$loose>;
export type ColorPalette = z.infer<typeof ColorPalette>;
//# sourceMappingURL=ColorPalette.d.ts.map