import { z } from "zod";
declare const _Color: z.ZodObject<{
    name: z.ZodString;
    representations: z.ZodObject<{
        sRGB: z.ZodOptional<import("./ColorValue.js").ColorValueSchema>;
        US_Web_Coated_SWOP_v2: z.ZodOptional<import("./ColorValue.js").ColorValueSchema>;
        CIELAB: z.ZodOptional<import("./ColorValue.js").ColorValueSchema>;
    }, z.core.$strip>;
    uuid: z.ZodString;
}, z.core.$loose>;
type _ColorSchema = typeof _Color;
export interface ColorSchema extends _ColorSchema {
}
export declare const Color: ColorSchema;
export type Color = z.infer<typeof Color>;
export {};
//# sourceMappingURL=Color.d.ts.map