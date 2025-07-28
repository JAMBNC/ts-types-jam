import { z } from "zod/v4";
export const DisplayGroup = z.object({
    id: z.string(),
    identifiers: z.record(z.string(), z.any()).optional(),
    primaryPivots: z.array(z.object({
        helpText: z.string().optional(),
        label: z.string(),
        values: z.array(z.object({
            helpText: z.string().optional(),
            label: z.string(),
            skus: z.array(z.string()),
            swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
            swatchValue: z.string().optional(),
        })),
    })),
    products: z.array(z.object({
        isCustomizable: z.boolean().optional(),
        mainImageUrl: z.string().optional(),
        selectionValues: z.record(z.string(), z.any()).optional(),
        shortName: z.string().optional(),
        sku: z.string(),
    })),
    secondaryPivots: z.array(z.object({
        helpText: z.string().optional(),
        label: z.string(),
        values: z.array(z.object({
            helpText: z.string().optional(),
            label: z.string(),
            skus: z.array(z.string()),
            swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
            swatchValue: z.string().optional(),
        })),
    })),
});
