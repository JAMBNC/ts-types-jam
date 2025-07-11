import { z } from "zod";
export declare const ProductPivotValue: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    skus: z.ZodArray<z.ZodString>;
    swatchType: z.ZodOptional<z.ZodEnum<{
        Text: "Text";
        Image: "Image";
        Color: "Color";
    }>>;
    swatchValue: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductPivotValue = z.infer<typeof ProductPivotValue>;
//# sourceMappingURL=ProductPivotValue.d.ts.map