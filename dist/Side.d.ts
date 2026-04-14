import { z } from "zod";
export declare const Side: z.ZodObject<{
    foil1: z.ZodString;
    foil2: z.ZodString;
    foil3: z.ZodString;
    digital: z.ZodBoolean;
    offset: z.ZodNumber;
    color1: z.ZodString;
    color2: z.ZodString;
    color3: z.ZodString;
}, z.core.$loose>;
export type Side = z.infer<typeof Side>;
//# sourceMappingURL=Side.d.ts.map