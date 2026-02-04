import { z } from "zod";
export declare const Color: z.ZodObject<{
    name: z.ZodString;
    representations: z.ZodRecord<z.ZodEnum<{
        sRGB: "sRGB";
        US_Web_Coated_SWOP_v2: "US_Web_Coated_SWOP_v2";
    }>, z.ZodArray<z.ZodNumber>>;
    uuid: z.ZodString;
}, z.core.$loose>;
export type Color = z.infer<typeof Color>;
//# sourceMappingURL=Color.d.ts.map