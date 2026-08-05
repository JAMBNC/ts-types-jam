import { z } from "zod";
declare const _LineItem: z.ZodObject<{
    children: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    discountAmount: z.ZodDefault<z.ZodNumber>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
    name: z.ZodString;
    productIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    quantity: z.ZodNumber;
    sku: z.ZodString;
    subtotal: z.ZodDefault<z.ZodNumber>;
    taxAmount: z.ZodDefault<z.ZodNumber>;
    total: z.ZodDefault<z.ZodNumber>;
    weightInPounds: z.ZodDefault<z.ZodNumber>;
}, z.core.$loose>;
type _LineItemSchema = typeof _LineItem;
export interface LineItemSchema extends _LineItemSchema {
}
export declare const LineItem: LineItemSchema;
export type LineItem = z.infer<typeof LineItem>;
export {};
//# sourceMappingURL=LineItem.d.ts.map