import { z } from "zod";
export declare const PivotValue: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    products: z.ZodArray<z.ZodString>;
    swatchType: z.ZodOptional<z.ZodEnum<{
        IMAGE: "IMAGE";
        RGB: "RGB";
        TEXT: "TEXT";
    }>>;
    swatchValue: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type PivotValue = z.infer<typeof PivotValue>;
//# sourceMappingURL=PivotValue.d.ts.map