import { z } from "zod";
/**Google Shopping / merchant metafields.*/
export declare const GoogleShopping: z.ZodObject<{
    productCategory: z.ZodOptional<z.ZodString>;
    color: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
    material: z.ZodOptional<z.ZodString>;
    customLabel0: z.ZodOptional<z.ZodString>;
    customLabel1: z.ZodOptional<z.ZodString>;
    customLabel2: z.ZodOptional<z.ZodString>;
    customLabel3: z.ZodOptional<z.ZodString>;
    customLabel4: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type GoogleShopping = z.infer<typeof GoogleShopping>;
//# sourceMappingURL=GoogleShopping.d.ts.map