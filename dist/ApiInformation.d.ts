import { z } from "zod";
export declare const ApiInformation: z.ZodObject<{
    identifier: z.ZodString;
    autoSeparated: z.ZodBoolean;
    white: z.ZodBoolean;
    sides: z.ZodObject<{
        side1: z.ZodObject<{
            foil1: z.ZodString;
            foil2: z.ZodString;
            foil3: z.ZodString;
            digital: z.ZodBoolean;
            offset: z.ZodNumber;
            color1: z.ZodString;
            color2: z.ZodString;
            color3: z.ZodString;
        }, z.core.$loose>;
    }, z.core.$loose>;
    layers: z.ZodArray<z.ZodObject<{
        process: z.ZodString;
        color: z.ZodString;
    }, z.core.$loose>>;
}, z.core.$loose>;
export type ApiInformation = z.infer<typeof ApiInformation>;
//# sourceMappingURL=ApiInformation.d.ts.map