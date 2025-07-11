import { z } from "zod";
export const Product = z.object({
    badges: z.array(z.any()).optional(),
    brand: z.string().optional(),
    browsable: z.boolean(),
    content: z.any().optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    customization: z
        .object({
        designRequired: z.boolean().optional(),
        prebuiltConfigurationId: z.string().optional(),
        prebuiltCustomizable: z.boolean().optional(),
        prebuiltDesign: z.boolean().optional(),
    })
        .optional(),
    identifiers: z.record(z.any()).optional(),
    media: z.array(z.any()).optional(),
    name: z.string(),
    primaryCategory: z.any().optional(),
    purchaseOptions: z.any().optional(),
    searchable: z.boolean(),
    sku: z.string(),
    status: z.string().optional(),
    taxonomy: z.object({
        additionalProperties: z.record(z.any()).optional(),
        master: z.string().optional(),
        primary: z.string().optional(),
        sub: z.string().optional(),
    }),
    upc: z.string().optional(),
    updatedAt: z.string().datetime({ offset: true }).optional(),
    url: z.string(),
});
