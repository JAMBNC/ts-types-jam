import { z } from "zod";
declare const _PredefinedAttributeValue: z.ZodObject<{
    identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
    swatches: z.ZodOptional<z.ZodObject<{
        TEXT: z.ZodOptional<z.ZodString>;
        IMAGE: z.ZodOptional<z.ZodString>;
        RGB: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    value: z.ZodString;
}, z.core.$loose>;
type _PredefinedAttributeValueSchema = typeof _PredefinedAttributeValue;
export interface PredefinedAttributeValueSchema extends _PredefinedAttributeValueSchema {
}
export declare const PredefinedAttributeValue: PredefinedAttributeValueSchema;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
export {};
//# sourceMappingURL=PredefinedAttributeValue.d.ts.map