import { z } from "zod/v4";
export declare const PivotValue: z.ZodObject<{
    helpText: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    skus: z.ZodArray<z.ZodString>;
    swatchType: z.ZodOptional<z.ZodEnum<{
        TEXT: "TEXT";
        IMAGE: "IMAGE";
        RGB: "RGB";
    }>>;
    swatchValue: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PivotValue = z.infer<typeof PivotValue>;
//# sourceMappingURL=PivotValue.d.ts.map