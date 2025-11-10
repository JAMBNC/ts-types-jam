import { z } from "zod/v4";
export declare const Attribute: z.ZodObject<{
    code: z.ZodString;
    displayForCustomer: z.ZodBoolean;
    label: z.ZodString;
    predefinedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
        swatches: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    selectionRenderPreference: z.ZodEnum<{
        SELECT: "SELECT";
        SWATCH: "SWATCH";
        TEXT_SWATCH: "TEXT_SWATCH";
    }>;
    usedForProductSelection: z.ZodBoolean;
}, z.core.$strip>;
export type Attribute = z.infer<typeof Attribute>;
//# sourceMappingURL=Attribute.d.ts.map