import { z } from "zod";
export declare const Product: z.ZodObject<{
    badges: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    brand: z.ZodOptional<z.ZodString>;
    browsable: z.ZodBoolean;
    content: z.ZodOptional<z.ZodAny>;
    createdAt: z.ZodOptional<z.ZodString>;
    customization: z.ZodOptional<z.ZodObject<{
        designRequired: z.ZodOptional<z.ZodBoolean>;
        prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
        prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
        prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    media: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    name: z.ZodString;
    primaryCategory: z.ZodOptional<z.ZodAny>;
    purchaseOptions: z.ZodOptional<z.ZodAny>;
    searchable: z.ZodBoolean;
    sku: z.ZodString;
    status: z.ZodOptional<z.ZodString>;
    taxonomy: z.ZodObject<{
        additionalProperties: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        master: z.ZodOptional<z.ZodString>;
        primary: z.ZodOptional<z.ZodString>;
        sub: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    upc: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
}, z.core.$strip>;
export type Product = z.infer<typeof Product>;
//# sourceMappingURL=Product.d.ts.map