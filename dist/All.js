import { z } from "zod";
export const All = z.object({
    address: z
        .object({
        city: z.string(),
        company: z.string().optional(),
        country: z.string().optional(),
        firstName: z.string().optional(),
        identifiers: z.record(z.any()).optional(),
        lastName: z.string().optional(),
        phone: z.string().optional(),
        postal: z.string().optional(),
        region: z.string().optional(),
        streets: z.array(z.string()),
    })
        .optional(),
    customer: z
        .object({
        addresses: z
            .array(z.object({
            city: z.string(),
            company: z.string().optional(),
            country: z.string().optional(),
            firstName: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            lastName: z.string().optional(),
            phone: z.string().optional(),
            postal: z.string().optional(),
            region: z.string().optional(),
            streets: z.array(z.string()),
        }))
            .optional(),
        email: z.string().optional(),
        firstName: z.string().optional(),
        identifiers: z.record(z.any()).optional(),
        lastName: z.string().optional(),
    })
        .optional(),
    order: z
        .object({
        billingAddress: z.object({
            city: z.string(),
            company: z.string().optional(),
            country: z.string().optional(),
            firstName: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            lastName: z.string().optional(),
            phone: z.string().optional(),
            postal: z.string().optional(),
            region: z.string().optional(),
            streets: z.array(z.string()),
        }),
        comments: z.string().optional(),
        currencyCode: z.string().optional(),
        customerIdentifiers: z.record(z.any()).optional(),
        discounts: z
            .array(z.object({
            amount: z.number().gte(0).optional(),
            code: z.string().optional(),
            description: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
        }))
            .optional(),
        email: z.string().optional(),
        firstName: z.string().optional(),
        identifiers: z.record(z.any()).optional(),
        lastName: z.string().optional(),
        lineItems: z
            .array(z.object({
            children: z.array(z.any()).optional(),
            discountAmount: z.number().gte(0).optional(),
            identifiers: z.record(z.any()).optional(),
            imageUrls: z.array(z.string()).optional(),
            name: z.string(),
            productIdentifiers: z.record(z.any()).optional(),
            quantity: z.number().gt(0),
            sku: z.string(),
            subtotal: z.number().gte(0),
            taxAmount: z.number().gte(0),
            total: z.number().gte(0),
            weightInPounds: z.number().gte(0),
        }))
            .min(1),
        orderDate: z.string().datetime({ offset: true }).optional(),
        orderNumber: z
            .string()
            .min(1)
            .max(50)
            .describe("Globally unique orderNumber.  Usually a combination of sales channel and order number"),
        payments: z
            .array(z.object({
            amount: z.number().gte(0).optional(),
            billToName: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            method: z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]),
            paymentDate: z.string().datetime({ offset: true }).optional(),
            poNumber: z.string().optional(),
            status: z.string().optional(),
        }))
            .optional(),
        salesChannel: z.string(),
        shippingAddress: z
            .object({
            city: z.string(),
            company: z.string().optional(),
            country: z.string().optional(),
            firstName: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            lastName: z.string().optional(),
            phone: z.string().optional(),
            postal: z.string().optional(),
            region: z.string().optional(),
            streets: z.array(z.string()),
        })
            .optional(),
        shippingAmount: z.number().gte(0),
        shippingInfo: z
            .object({
            accountNumber: z.string().optional(),
            accountType: z.string().optional(),
            isBlindShipping: z.boolean(),
            method: z.string().optional(),
            provider: z.enum(["FedEx", "UPS", "USPS", "Other"]),
            weightInPounds: z.number().gte(0).optional(),
        })
            .optional(),
        status: z.literal("CREATED").optional(),
        subtotal: z.number().gte(0),
        taxAmount: z.number().gte(0),
        total: z.number().gte(0),
    })
        .optional(),
    product: z
        .object({
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
            designRequired: z.boolean().optional(),
            prebuiltConfigurationId: z.string().optional(),
            prebuiltCustomizable: z.boolean().optional(),
            prebuiltDesign: z.boolean().optional(),
        })
            .optional(),
        identifiers: z.record(z.any()).optional(),
        media: z
            .array(z.object({
            altText: z.string().optional(),
            mediaType: z.enum(["Image", "Video"]),
            tags: z.array(z.string()).optional(),
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
            customizable: z.boolean(),
            customizeLeadTimeDayRange: z.string().optional(),
            discountReason: z.string().optional(),
            inStock: z.boolean(),
            leadTime: z.string().optional(),
            minCustomizationQty: z.number().int().gt(0).optional(),
            minSaleQty: z.number().int().gt(0).optional(),
            onSale: z.boolean().optional(),
            plainLeadTimeDayRange: z.string().optional(),
            price: z.number(),
            quantityStepIncrements: z
                .array(z.object({
                requiredStepIncrement: z.number().int(),
                startingAtQty: z.number().int(),
            }))
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
            master: z.string().optional(),
            primary: z.string().optional(),
            sub: z.string().optional(),
        }),
        upc: z.string().optional(),
        updatedAt: z.string().datetime({ offset: true }).optional(),
        url: z.string(),
    })
        .optional(),
    shipment: z
        .object({
        carrier: z.string().optional(),
        comments: z.string().optional(),
        currencyCode: z.string().optional(),
        estimatedDeliveryDate: z.string().datetime({ offset: true }).optional(),
        identifiers: z.record(z.any()).optional(),
        lineItems: z
            .array(z.object({
            children: z.array(z.any()).optional(),
            discountAmount: z.number().gte(0).optional(),
            identifiers: z.record(z.any()).optional(),
            imageUrls: z.array(z.string()).optional(),
            name: z.string(),
            productIdentifiers: z.record(z.any()).optional(),
            quantity: z.number().gt(0),
            sku: z.string(),
            subtotal: z.number().gte(0),
            taxAmount: z.number().gte(0),
            total: z.number().gte(0),
            weightInPounds: z.number().gte(0),
        }))
            .optional(),
        orderIdentifiers: z.record(z.any()).optional(),
        orderNumber: z
            .string()
            .min(1)
            .max(50)
            .describe("Globally unique orderNumber.  Usually a combination of sales channel and order number"),
        shipmentDate: z.string().datetime({ offset: true }),
        trackingNumber: z.string().optional(),
        trackingUrl: z.string().optional(),
    })
        .optional(),
});
