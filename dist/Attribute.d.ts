import { z } from "zod/v4";
export declare const Attribute: z.ZodObject<{
    code: z.ZodString;
    displayForCustomer: z.ZodBoolean;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    label: z.ZodString;
    predefinedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
        swatches: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        value: z.ZodString;
    }, z.core.$strip>>>;
    renderPreference: z.ZodEnum<{
        swatches: "swatches";
        tabs: "tabs";
        dropdown: "dropdown";
        textSwatches: "textSwatches";
        modal: "modal";
    }>;
    usedForProductSelection: z.ZodBoolean;
}, z.core.$strip>;
export type Attribute = z.infer<typeof Attribute>;
//# sourceMappingURL=Attribute.d.ts.map