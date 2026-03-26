import { z } from "zod";
export declare const PredefinedAttributeValue: z.ZodObject<{
    identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
    swatches: z.ZodOptional<z.ZodObject<{
        TEXT: z.ZodOptional<z.ZodString>;
        IMAGE: z.ZodOptional<z.ZodString>;
        RGB: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    value: z.ZodString;
}, z.core.$loose>;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
//# sourceMappingURL=PredefinedAttributeValue.d.ts.map