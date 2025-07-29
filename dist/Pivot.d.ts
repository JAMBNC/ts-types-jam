import { z } from "zod/v4";
export declare const Pivot: z.ZodObject<{
    code: z.ZodString;
    helpText: z.ZodOptional<z.ZodString>;
    values: z.ZodArray<z.ZodObject<{
        helpText: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
        products: z.ZodArray<z.ZodString>;
        swatchType: z.ZodOptional<z.ZodEnum<{
            TEXT: "TEXT";
            IMAGE: "IMAGE";
            RGB: "RGB";
        }>>;
        swatchValue: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type Pivot = z.infer<typeof Pivot>;
//# sourceMappingURL=Pivot.d.ts.map