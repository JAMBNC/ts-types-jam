import { z } from "zod";
export declare const PredefinedAttributeValue: z.ZodObject<{
    identifiers: z.ZodRecord<z.ZodAny, z.core.SomeType>;
    swatches: z.ZodOptional<z.ZodRecord<z.ZodEnum<{
        TEXT: "TEXT";
        IMAGE: "IMAGE";
        RGB: "RGB";
    }>, z.ZodString>>;
    value: z.ZodString;
}, z.core.$loose>;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
//# sourceMappingURL=PredefinedAttributeValue.d.ts.map