import { z } from "zod";
export declare const AnalyzedProduct: z.ZodObject<{
    sku: z.ZodString;
    name: z.ZodString;
    proofs: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        label: z.ZodString;
    }, z.core.$loose>>;
    vendors: z.ZodArray<z.ZodObject<{
        identifier: z.ZodString;
        pms: z.ZodNumber;
        cmyk: z.ZodBoolean;
        white: z.ZodBoolean;
        black: z.ZodBoolean;
        foilColors: z.ZodNumber;
        foilStamps: z.ZodNumber;
    }, z.core.$loose>>;
}, z.core.$loose>;
export type AnalyzedProduct = z.infer<typeof AnalyzedProduct>;
//# sourceMappingURL=AnalyzedProduct.d.ts.map