import { z } from "zod";
export declare const InventoryDataFeed: z.ZodObject<{
    sku: z.ZodString;
    generatedAt: z.ZodOptional<z.ZodString>;
    inStock: z.ZodBoolean;
    stockQty: z.ZodNumber;
    locations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        sourceCode: z.ZodString;
        stockQty: z.ZodNumber;
        inStock: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$loose>>>;
    plainLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$loose>>;
    customLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
        max: z.ZodOptional<z.ZodNumber>;
        min: z.ZodNumber;
    }, z.core.$loose>>;
    leadTimeLabel: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type InventoryDataFeed = z.infer<typeof InventoryDataFeed>;
//# sourceMappingURL=InventoryDataFeed.d.ts.map