import { z } from "zod/v4";
export const DisplayGroup = z.object({
    id: z.string(),
    identifiers: z.record(z.string(), z.any()).optional(),
    pivots: z.array(z.object({
        attributeRenderPreference: z
            .enum(["tabs", "dropdown", "swatches", "modal"])
            .optional(),
        code: z.string(),
        helpText: z.string().optional(),
        label: z.string().optional(),
        pivotType: z.enum(["primary", "secondary"]).optional(),
        values: z.array(z.object({
            helpText: z.string().optional(),
            label: z.string(),
            products: z.array(z.string()),
            swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
            swatchValue: z.string().optional(),
        })),
    })),
    products: z.array(z.object({
        isCustomizable: z.boolean(),
        mainImageUrl: z.string().optional(),
        pivotValues: z.record(z.string(), z.any()).optional(),
        shortName: z.string().optional(),
        sku: z.string(),
    })),
    shoutOuts: z
        .array(z.object({
        display: z.string(),
        type: z.enum(["generic", "product", "category", "group", "similar"]),
        url: z.string(),
        value: z.string().optional(),
    }))
        .optional(),
});
