import { z } from "zod";
export declare const DisplayGroup: z.ZodObject<{
    id: z.ZodString;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    pivots: z.ZodArray<z.ZodObject<{
        attributeRenderPreference: z.ZodOptional<z.ZodEnum<{
            dropdown: "dropdown";
            modal: "modal";
            swatches: "swatches";
            tabs: "tabs";
        }>>;
        code: z.ZodString;
        helpText: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodString>;
        pivotType: z.ZodOptional<z.ZodEnum<{
            primary: "primary";
            secondary: "secondary";
        }>>;
        values: z.ZodArray<z.ZodObject<{
            helpText: z.ZodOptional<z.ZodString>;
            label: z.ZodString;
            products: z.ZodArray<z.ZodString>;
            swatchType: z.ZodOptional<z.ZodEnum<{
                IMAGE: "IMAGE";
                RGB: "RGB";
                TEXT: "TEXT";
            }>>;
            swatchValue: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>>;
    }, z.core.$loose>>;
    products: z.ZodArray<z.ZodObject<{
        isCustomizable: z.ZodBoolean;
        mainImageUrl: z.ZodOptional<z.ZodString>;
        pivotValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        shortName: z.ZodOptional<z.ZodString>;
        sku: z.ZodString;
    }, z.core.$loose>>;
    shoutOuts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            category: "category";
            generic: "generic";
            group: "group";
            product: "product";
            similar: "similar";
        }>;
        display: z.ZodString;
        url: z.ZodString;
        value: z.ZodOptional<z.ZodString>;
    }, z.core.$loose>>>;
}, z.core.$loose>;
export type DisplayGroup = z.infer<typeof DisplayGroup>;
//# sourceMappingURL=DisplayGroup.d.ts.map