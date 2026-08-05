import { z } from "zod";
declare const _RgbColor: z.ZodObject<{
    a: z.ZodOptional<z.ZodNumber>;
    b: z.ZodOptional<z.ZodNumber>;
    g: z.ZodOptional<z.ZodNumber>;
    hex: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    r: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
type _RgbColorSchema = typeof _RgbColor;
export interface RgbColorSchema extends _RgbColorSchema {
}
/**A color with name, hex code, and optional RGBA components.*/
export declare const RgbColor: RgbColorSchema;
export type RgbColor = z.infer<typeof RgbColor>;
export {};
//# sourceMappingURL=RgbColor.d.ts.map