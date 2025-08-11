import { z } from "zod/v4";
export declare const DisplayGroup: z.ZodObject<{
    id: z.ZodString;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    pivots: z.ZodArray<z.ZodObject<{
        code: z.ZodString;
        helpText: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<{
            Primary: "Primary";
            Secondary: "Secondary";
        }>>;
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
    }, z.core.$strip>>;
    products: z.ZodArray<z.ZodObject<{
        isCustomizable: z.ZodBoolean;
        mainImageUrl: z.ZodOptional<z.ZodString>;
        pivotValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        shortName: z.ZodOptional<z.ZodString>;
        sku: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
//# sourceMappingURL=DisplayGroup.d.ts.map