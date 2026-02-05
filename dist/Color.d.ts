import { z } from "zod";
export declare const Color: z.ZodObject<{
    name: z.ZodString;
    representations: z.ZodObject<{
        sRGB: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
        US_Web_Coated_SWOP_v2: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
    }, z.core.$strip>;
    uuid: z.ZodString;
}, z.core.$loose>;
export type Color = z.infer<typeof Color>;
//# sourceMappingURL=Color.d.ts.map