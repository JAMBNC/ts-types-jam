import { z } from "zod";
export declare const PdfSide: z.ZodObject<{
    cmyk: z.ZodBoolean;
    pms: z.ZodNumber;
    white: z.ZodBoolean;
    black: z.ZodBoolean;
    miscPlates: z.ZodArray<z.ZodAny>;
    spotcolorPlates: z.ZodArray<z.ZodString>;
    foils: z.ZodArray<z.ZodAny>;
}, z.core.$loose>;
export type PdfSide = z.infer<typeof PdfSide>;
//# sourceMappingURL=PdfSide.d.ts.map