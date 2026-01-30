import { z } from "zod";
export declare const Attribute: z.ZodObject<{
    code: z.ZodString;
    displayForCustomer: z.ZodBoolean;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    label: z.ZodString;
    predefinedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        identifiers: z.ZodRecord<z.ZodAny, z.core.SomeType>;
        swatches: z.ZodOptional<z.ZodRecord<z.ZodString, z.core.SomeType>>;
        value: z.ZodString;
    }, z.core.$loose>>>;
    renderPreference: z.ZodEnum<{
        swatches: "swatches";
        tabs: "tabs";
        dropdown: "dropdown";
        modal: "modal";
    }>;
    secondarySelectionEnabled: z.ZodBoolean;
    usedForProductSelection: z.ZodBoolean;
}, z.core.$loose>;
export type Attribute = z.infer<typeof Attribute>;
//# sourceMappingURL=Attribute.d.ts.map