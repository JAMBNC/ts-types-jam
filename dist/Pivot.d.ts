import { z } from "zod/v4";
export declare const Pivot: z.ZodObject<{
    attributeRenderPreference: z.ZodOptional<z.ZodEnum<{
        swatches: "swatches";
        tabs: "tabs";
        dropdown: "dropdown";
        textSwatches: "textSwatches";
        modal: "modal";
    }>>;
    code: z.ZodString;
    helpText: z.ZodOptional<z.ZodString>;
    pivotType: z.ZodOptional<z.ZodEnum<{
        primary: "primary";
        secondary: "secondary";
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
}, z.core.$strip>;
export type Pivot = z.infer<typeof Pivot>;
//# sourceMappingURL=Pivot.d.ts.map