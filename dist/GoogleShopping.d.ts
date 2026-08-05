import { z } from "zod";
declare const _GoogleShopping: z.ZodObject<{
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
type _GoogleShoppingSchema = typeof _GoogleShopping;
export interface GoogleShoppingSchema extends _GoogleShoppingSchema {
}
/**Google Shopping / merchant metafields.*/
export declare const GoogleShopping: GoogleShoppingSchema;
export type GoogleShopping = z.infer<typeof GoogleShopping>;
export {};
//# sourceMappingURL=GoogleShopping.d.ts.map