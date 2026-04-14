import { z } from "zod";
export declare const AnalyzedVendor: z.ZodObject<{
    identifier: z.ZodString;
    pms: z.ZodNumber;
    cmyk: z.ZodBoolean;
    white: z.ZodBoolean;
    black: z.ZodBoolean;
    foilColors: z.ZodNumber;
    foilStamps: z.ZodNumber;
}, z.core.$loose>;
export type AnalyzedVendor = z.infer<typeof AnalyzedVendor>;
//# sourceMappingURL=AnalyzedVendor.d.ts.map