import { z } from "zod";

export const Product = z.object({
  badges: z
    .array(
      z.object({
        id: z.number().int().optional(),
        imageUrl: z.string().optional(),
        label: z.string().optional(),
      }),
    )
    .optional(),
  brand: z.string(),
  browsable: z.boolean(),
  content: z
    .object({
      longDescription: z.string().optional(),
      metaDescription: z.string().optional(),
      metaKeywords: z.string().optional(),
      metaTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      shortDescription: z.string().optional(),
    })
    .optional(),
  createdAt: z.string().datetime({ offset: true }).optional(),
  customization: z
    .object({
      designRequired: z.boolean(),
      prebuiltConfigurationId: z.string().optional(),
      prebuiltCustomizable: z.boolean(),
      prebuiltDesign: z.boolean(),
    })
    .optional(),
  identifiers: z.record(z.any()).optional(),
  media: z
    .array(
      z.object({
        altText: z.string().optional(),
        mediaType: z.string(),
        tags: z.array(z.string()).optional(),
        url: z.string(),
      }),
    )
    .optional(),
  name: z.string(),
  primaryCategory: z
    .object({ id: z.number().int(), label: z.string(), url: z.string() })
    .optional(),
  purchaseOptions: z
    .object({
      allowsSample: z.boolean(),
      availability: z.string(),
      basePrice: z.number(),
      customizable: z.boolean(),
      customizeLeadTimeDayRange: z.string().optional(),
      discountReason: z.string().optional(),
      inStock: z.boolean(),
      leadTime: z.string().optional(),
      minCustomizationQty: z.number().int().gt(0).optional(),
      minSaleQty: z.number().int().gt(0),
      onSale: z.boolean().optional(),
      plainLeadTimeDayRange: z.string().optional(),
      price: z.number(),
      quantityStepIncrements: z
        .array(
          z.object({
            requiredStepIncrement: z.number().int(),
            startingAtQty: z.number().int(),
          }),
        )
        .optional(),
      salePrice: z.number().optional(),
      stockQty: z.number().int().gte(0),
      suggestedQuantityDisplays: z.array(z.number().int()).optional(),
      tierPrices: z
        .array(z.object({ price: z.number(), startingAtQty: z.number().int() }))
        .optional(),
      toBeDiscontinued: z.boolean(),
    })
    .optional(),
  searchable: z.boolean(),
  sku: z.string(),
  status: z.string().optional(),
  taxonomy: z.object({
    additionalProperties: z.record(z.any()).optional(),
    master: z.string(),
    primary: z.string(),
    sub: z.string(),
  }),
  upc: z.string().optional(),
  updatedAt: z.string().datetime({ offset: true }).optional(),
  url: z.string(),
});
export type Product = z.infer<typeof Product>;
