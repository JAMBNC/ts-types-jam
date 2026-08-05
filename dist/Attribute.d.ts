import { z } from "zod";
declare const _Attribute: z.ZodObject<{
    code: z.ZodString;
    displayForCustomer: z.ZodBoolean;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    label: z.ZodString;
    predefinedValues: z.ZodOptional<z.ZodArray<import("./PredefinedAttributeValue.js").PredefinedAttributeValueSchema>>;
    renderPreference: import("./AttributeRenderPreference.js").AttributeRenderPreferenceSchema;
    secondarySelectionEnabled: z.ZodBoolean;
    usedForProductSelection: z.ZodBoolean;
}, z.core.$loose>;
type _AttributeSchema = typeof _Attribute;
export interface AttributeSchema extends _AttributeSchema {
}
export declare const Attribute: AttributeSchema;
export type Attribute = z.infer<typeof Attribute>;
export {};
//# sourceMappingURL=Attribute.d.ts.map