import { z } from "zod/v4";
export const Product = z.object({
    badges: z
        .array(z.object({
        id: z.number().int().optional(),
        imageUrl: z.string().optional(),
        label: z.string().optional(),
    }))
        .optional(),
    brand: z.string().optional(),
    browsable: z.boolean(),
    content: z
        .object({
        breadcrumbs: z
            .array(z.object({ label: z.string(), url: z.string().optional() }))
            .optional(),
        longDescription: z.string().optional(),
        metaDescription: z.string().optional(),
        metaKeywords: z.string().optional(),
        metaTitle: z.string().optional(),
        seoDescription: z.string().optional(),
        shortDescription: z.string().optional(),
        shortName: z.string().optional(),
    })
        .optional(),
    createdAt: z.string().datetime({ offset: true }).optional(),
    customization: z
        .object({
        prebuiltConfigurationId: z.string().optional(),
        prebuiltCustomizable: z.boolean().optional(),
        prebuiltDesign: z.boolean().optional(),
        stockType: z.string().optional(),
        styleType: z.string().optional(),
    })
        .optional(),
    displayGroup: z.string().optional(),
    identifiers: z.record(z.string(), z.any()).optional(),
    media: z
        .array(z.object({
        altText: z.string().optional(),
        label: z.string().optional(),
        mediaType: z.enum(["image", "video"]),
        previewUrl: z.string().optional(),
        tags: z
            .array(z.enum([
            "primary",
            "small",
            "thumbnail",
            "yourLogoHere",
            "insideView",
            "swatch",
            "amazon",
            "carousel",
            "other",
        ]))
            .optional(),
        url: z.string(),
    }))
        .optional(),
    name: z.string(),
    primaryCategory: z
        .object({ id: z.number().int(), label: z.string(), url: z.string() })
        .optional(),
    purchaseOptions: z
        .object({
        allowsSample: z.boolean(),
        customLeadTimeDayRange: z
            .object({
            max: z.number().int().gte(0).optional(),
            min: z.number().int().gte(0),
        })
            .optional(),
        customizable: z.boolean(),
        designRequired: z.boolean(),
        inStock: z.boolean(),
        isReturnable: z.boolean(),
        maxPrice: z.number(),
        minCustomizationQty: z.number().int().gt(0).optional(),
        minPrice: z.number(),
        minSaleQty: z.number().int().gt(0).optional(),
        onSale: z.boolean().optional(),
        plainLeadTimeDayRange: z
            .object({
            max: z.number().int().gte(0).optional(),
            min: z.number().int().gte(0),
        })
            .optional(),
        pricePercentOff: z.number().optional(),
        quantityStepIncrements: z
            .array(z.object({
            requiredStepIncrement: z.number().int(),
            startingAtQty: z.number().int(),
        }))
            .optional(),
        stockQty: z.number().int().gte(0),
        suggestedQuantityDisplays: z.array(z.number().int()).optional(),
        tierPrices: z.array(z.object({
            discountReason: z.string().optional(),
            price: z.number(),
            pricePercentOff: z.number().optional(),
            salePrice: z.number().optional(),
            startingAtQty: z.number().int(),
        })),
        toBeDiscontinued: z.boolean(),
    })
        .optional(),
    searchable: z.boolean(),
    sku: z.string(),
    specs: z.record(z.string(), z.any()),
    status: z.string().optional(),
    taxonomy: z.object({
        master: z.string().optional(),
        primary: z.string().optional(),
        sub: z.string().optional(),
    }),
    upc: z.string().optional(),
    updatedAt: z.string().datetime({ offset: true }).optional(),
    url: z.string(),
});
