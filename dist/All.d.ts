import { z } from "zod";
export declare const All: z.ZodObject<{
    address: z.ZodOptional<z.ZodObject<{
        city: z.ZodString;
        company: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        lastName: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        postal: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodString>;
        streets: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    customer: z.ZodOptional<z.ZodObject<{
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            city: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            lastName: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            streets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        email: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        lastName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    order: z.ZodOptional<z.ZodObject<{
        billingAddress: z.ZodObject<{
            city: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            lastName: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            streets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        comments: z.ZodOptional<z.ZodString>;
        currencyCode: z.ZodOptional<z.ZodString>;
        customerIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        discounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            amount: z.ZodOptional<z.ZodNumber>;
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        }, z.core.$strip>>>;
        email: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        lastName: z.ZodOptional<z.ZodString>;
        lineItems: z.ZodArray<z.ZodObject<{
            children: z.ZodOptional<z.ZodArray<z.ZodAny>>;
            discountAmount: z.ZodOptional<z.ZodNumber>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
            name: z.ZodString;
            productIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            quantity: z.ZodNumber;
            sku: z.ZodString;
            subtotal: z.ZodNumber;
            taxAmount: z.ZodNumber;
            total: z.ZodNumber;
            weightInPounds: z.ZodNumber;
        }, z.core.$strip>>;
        orderDate: z.ZodOptional<z.ZodString>;
        orderNumber: z.ZodString;
        payments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            amount: z.ZodOptional<z.ZodNumber>;
            billToName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            method: z.ZodEnum<{
                CASH: "CASH";
                PO: "PO";
                CREDIT_CARD: "CREDIT_CARD";
                ON_ACCOUNT: "ON_ACCOUNT";
            }>;
            paymentDate: z.ZodOptional<z.ZodString>;
            poNumber: z.ZodOptional<z.ZodString>;
            status: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        salesChannel: z.ZodString;
        shippingAddress: z.ZodOptional<z.ZodObject<{
            city: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            lastName: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            streets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>;
        shippingAmount: z.ZodNumber;
        shippingInfo: z.ZodOptional<z.ZodObject<{
            accountNumber: z.ZodOptional<z.ZodString>;
            accountType: z.ZodOptional<z.ZodString>;
            isBlindShipping: z.ZodBoolean;
            method: z.ZodOptional<z.ZodString>;
            provider: z.ZodEnum<{
                FedEx: "FedEx";
                UPS: "UPS";
                USPS: "USPS";
                Other: "Other";
            }>;
            weightInPounds: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        status: z.ZodOptional<z.ZodLiteral<"CREATED">>;
        subtotal: z.ZodNumber;
        taxAmount: z.ZodNumber;
        total: z.ZodNumber;
    }, z.core.$strip>>;
    product: z.ZodOptional<z.ZodObject<{
        badges: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodNumber>;
            imageUrl: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
        brand: z.ZodOptional<z.ZodString>;
        browsable: z.ZodBoolean;
        content: z.ZodOptional<z.ZodObject<{
            longDescription: z.ZodOptional<z.ZodString>;
            metaDescription: z.ZodOptional<z.ZodString>;
            metaKeywords: z.ZodOptional<z.ZodString>;
            metaTitle: z.ZodOptional<z.ZodString>;
            seoDescription: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        createdAt: z.ZodOptional<z.ZodString>;
        customization: z.ZodOptional<z.ZodObject<{
            designRequired: z.ZodOptional<z.ZodBoolean>;
            prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
            prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
            prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        media: z.ZodOptional<z.ZodArray<z.ZodObject<{
            altText: z.ZodOptional<z.ZodString>;
            mediaType: z.ZodEnum<{
                Image: "Image";
                Video: "Video";
            }>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            url: z.ZodString;
        }, z.core.$strip>>>;
        name: z.ZodString;
        primaryCategory: z.ZodOptional<z.ZodObject<{
            id: z.ZodNumber;
            label: z.ZodString;
            url: z.ZodString;
        }, z.core.$strip>>;
        purchaseOptions: z.ZodOptional<z.ZodObject<{
            allowsSample: z.ZodBoolean;
            customizable: z.ZodBoolean;
            customizeLeadTimeDayRange: z.ZodOptional<z.ZodString>;
            discountReason: z.ZodOptional<z.ZodString>;
            inStock: z.ZodBoolean;
            leadTime: z.ZodOptional<z.ZodString>;
            minCustomizationQty: z.ZodOptional<z.ZodNumber>;
            minSaleQty: z.ZodOptional<z.ZodNumber>;
            onSale: z.ZodOptional<z.ZodBoolean>;
            plainLeadTimeDayRange: z.ZodOptional<z.ZodString>;
            price: z.ZodNumber;
            quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
                requiredStepIncrement: z.ZodNumber;
                startingAtQty: z.ZodNumber;
            }, z.core.$strip>>>;
            salePrice: z.ZodOptional<z.ZodNumber>;
            stockQty: z.ZodNumber;
            suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            tierPrices: z.ZodOptional<z.ZodArray<z.ZodObject<{
                price: z.ZodNumber;
                startingAtQty: z.ZodNumber;
            }, z.core.$strip>>>;
            toBeDiscontinued: z.ZodBoolean;
        }, z.core.$strip>>;
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
    }, z.core.$strip>>;
    shipment: z.ZodOptional<z.ZodObject<{
        carrier: z.ZodOptional<z.ZodString>;
        comments: z.ZodOptional<z.ZodString>;
        currencyCode: z.ZodOptional<z.ZodString>;
        estimatedDeliveryDate: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        lineItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
            children: z.ZodOptional<z.ZodArray<z.ZodAny>>;
            discountAmount: z.ZodOptional<z.ZodNumber>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
            name: z.ZodString;
            productIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
            quantity: z.ZodNumber;
            sku: z.ZodString;
            subtotal: z.ZodNumber;
            taxAmount: z.ZodNumber;
            total: z.ZodNumber;
            weightInPounds: z.ZodNumber;
        }, z.core.$strip>>>;
        orderIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
        orderNumber: z.ZodString;
        shipmentDate: z.ZodString;
        trackingNumber: z.ZodOptional<z.ZodString>;
        trackingUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type All = z.infer<typeof All>;
//# sourceMappingURL=All.d.ts.map