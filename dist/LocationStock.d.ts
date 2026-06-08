import { z } from "zod";
export declare const LocationStock: z.ZodObject<{
    sourceCode: z.ZodString;
    stockQty: z.ZodNumber;
    inStock: z.ZodOptional<z.ZodBoolean>;
}, z.core.$loose>;
export type LocationStock = z.infer<typeof LocationStock>;
//# sourceMappingURL=LocationStock.d.ts.map