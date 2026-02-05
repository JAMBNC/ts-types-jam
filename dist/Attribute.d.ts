import { z } from "zod";
export declare const Attribute: z.ZodObject<{
    code: z.ZodString;
    displayForCustomer: z.ZodBoolean;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    label: z.ZodString;
    predefinedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
        swatches: z.ZodOptional<z.ZodObject<{
            TEXT: z.ZodOptional<z.ZodString>;
            IMAGE: z.ZodOptional<z.ZodString>;
            RGB: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        value: z.ZodString;
    }, z.core.$loose>>>;
    renderPreference: z.ZodEnum<{
        tabs: "tabs";
        dropdown: "dropdown";
        swatches: "swatches";
        modal: "modal";
    }>;
    secondarySelectionEnabled: z.ZodBoolean;
    usedForProductSelection: z.ZodBoolean;
}, z.core.$loose>;
export type Attribute = z.infer<typeof Attribute>;
//# sourceMappingURL=Attribute.d.ts.map