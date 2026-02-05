import { z } from "zod";
export declare const LineItem: z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    discountAmount: z.ZodOptional<z.ZodNumber>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
    name: z.ZodString;
    productIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    quantity: z.ZodNumber;
    sku: z.ZodString;
    subtotal: z.ZodNumber;
    taxAmount: z.ZodNumber;
    total: z.ZodNumber;
    weightInPounds: z.ZodNumber;
}, z.core.$loose>;
export type LineItem = z.infer<typeof LineItem>;
//# sourceMappingURL=LineItem.d.ts.map