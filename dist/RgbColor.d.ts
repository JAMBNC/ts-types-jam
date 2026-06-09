import { z } from "zod";
/**A color with name, hex code, and optional RGBA components.*/
export declare const RgbColor: z.ZodObject<{
    a: z.ZodOptional<z.ZodNumber>;
    b: z.ZodOptional<z.ZodNumber>;
    g: z.ZodOptional<z.ZodNumber>;
    hex: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    r: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
export type RgbColor = z.infer<typeof RgbColor>;
//# sourceMappingURL=RgbColor.d.ts.map