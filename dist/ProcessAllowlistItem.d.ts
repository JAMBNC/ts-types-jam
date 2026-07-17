import { z } from "zod";
export declare const ProcessAllowlistItem: z.ZodObject<{
    process: z.ZodEnum<{
        digital: "digital";
        emboss: "emboss";
        flexography: "flexography";
        foil: "foil";
        inkjet: "inkjet";
        offset: "offset";
        screen: "screen";
        sublimation: "sublimation";
        thermal: "thermal";
    }>;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>;
export type ProcessAllowlistItem = z.infer<typeof ProcessAllowlistItem>;
//# sourceMappingURL=ProcessAllowlistItem.d.ts.map