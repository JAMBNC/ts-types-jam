import { z } from "zod/v4";
export declare const DisplayGroup: z.ZodObject<{
    id: z.ZodString;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    primaryPivots: z.ZodArray<z.ZodObject<{
        helpText: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
        values: z.ZodArray<z.ZodObject<{
            helpText: z.ZodOptional<z.ZodString>;
            label: z.ZodString;
            skus: z.ZodArray<z.ZodString>;
            swatchType: z.ZodOptional<z.ZodEnum<{
                TEXT: "TEXT";
                IMAGE: "IMAGE";
                RGB: "RGB";
            }>>;
            swatchValue: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    products: z.ZodArray<z.ZodObject<{
        isCustomizable: z.ZodOptional<z.ZodBoolean>;
        mainImageUrl: z.ZodOptional<z.ZodString>;
        selectionValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        shortName: z.ZodOptional<z.ZodString>;
        sku: z.ZodString;
    }, z.core.$strip>>;
    secondaryPivots: z.ZodArray<z.ZodObject<{
        helpText: z.ZodOptional<z.ZodString>;
        label: z.ZodString;
        values: z.ZodArray<z.ZodObject<{
            helpText: z.ZodOptional<z.ZodString>;
            label: z.ZodString;
            skus: z.ZodArray<z.ZodString>;
            swatchType: z.ZodOptional<z.ZodEnum<{
                TEXT: "TEXT";
                IMAGE: "IMAGE";
                RGB: "RGB";
            }>>;
            swatchValue: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
//# sourceMappingURL=DisplayGroup.d.ts.map