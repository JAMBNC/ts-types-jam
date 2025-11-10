import { z } from "zod/v4";
export declare const PredefinedAttributeValue: z.ZodObject<{
    identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
    swatches: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    value: z.ZodString;
}, z.core.$strip>;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
//# sourceMappingURL=PredefinedAttributeValue.d.ts.map