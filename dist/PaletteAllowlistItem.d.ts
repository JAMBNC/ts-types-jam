import { z } from "zod";
export declare const PaletteAllowlistItem: z.ZodObject<{
    uuid: z.ZodString;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
    allowlist: z.ZodOptional<z.ZodObject<{
        colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type PaletteAllowlistItem = z.infer<typeof PaletteAllowlistItem>;
//# sourceMappingURL=PaletteAllowlistItem.d.ts.map