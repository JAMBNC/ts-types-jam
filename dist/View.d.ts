import { z } from "zod";
export declare const View: z.ZodObject<{
    side1: z.ZodObject<{
        color1: z.ZodString;
        color2: z.ZodString;
        color3: z.ZodString;
        foil1: z.ZodString;
        foil2: z.ZodString;
        foil3: z.ZodString;
    }, z.core.$loose>;
    side2: z.ZodObject<{
        color1: z.ZodString;
        color2: z.ZodString;
        color3: z.ZodString;
        foil1: z.ZodString;
        foil2: z.ZodString;
        foil3: z.ZodString;
    }, z.core.$loose>;
    vendor: z.ZodString;
}, z.core.$loose>;
export type View = z.infer<typeof View>;
//# sourceMappingURL=View.d.ts.map