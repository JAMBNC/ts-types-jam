import { z } from "zod";
export declare const PredefinedAttributeValue: z.ZodObject<{
    identifiers: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    swatches: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    value: z.ZodString;
}, z.core.$strip>;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
//# sourceMappingURL=PredefinedAttributeValue.d.ts.map