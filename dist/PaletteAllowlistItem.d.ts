import { z } from "zod";
declare const _PaletteAllowlistItem: z.ZodObject<{
    uuid: z.ZodString;
    allowCustomColors: z.ZodOptional<z.ZodBoolean>;
    allowBackgroundColor: z.ZodOptional<z.ZodBoolean>;
    allowlist: z.ZodOptional<z.ZodObject<{
        colors: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
type _PaletteAllowlistItemSchema = typeof _PaletteAllowlistItem;
export interface PaletteAllowlistItemSchema extends _PaletteAllowlistItemSchema {
}
export declare const PaletteAllowlistItem: PaletteAllowlistItemSchema;
export type PaletteAllowlistItem = z.infer<typeof PaletteAllowlistItem>;
export {};
//# sourceMappingURL=PaletteAllowlistItem.d.ts.map