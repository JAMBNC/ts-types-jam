import { z } from "zod/v4";
export declare const All: z.ZodObject<{
    address: z.ZodOptional<z.ZodObject<{
        city: z.ZodString;
        company: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lastName: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        postal: z.ZodOptional<z.ZodString>;
        region: z.ZodOptional<z.ZodString>;
        streets: z.ZodArray<z.ZodString>;
    }, z.core.$strip>>;
    attribute: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        displayForCustomer: z.ZodBoolean;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        label: z.ZodString;
        predefinedValues: z.ZodOptional<z.ZodArray<z.ZodObject<{
            identifiers: z.ZodRecord<z.ZodString, z.ZodAny>;
            swatches: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            value: z.ZodString;
        }, z.core.$strip>>>;
        renderPreference: z.ZodEnum<{
            swatches: "swatches";
            tabs: "tabs";
            dropdown: "dropdown";
            modal: "modal";
        }>;
        secondarySelectionEnabled: z.ZodBoolean;
        usedForProductSelection: z.ZodBoolean;
    }, z.core.$strip>>;
    badge: z.ZodOptional<z.ZodObject<{
        code: z.ZodString;
        images: z.ZodOptional<z.ZodArray<z.ZodObject<{
            context: z.ZodEnum<{
                product_detail: "product_detail";
                product_listing: "product_listing";
            }>;
            position: z.ZodEnum<{
                topRight: "topRight";
                bottomRight: "bottomRight";
                bottomLeft: "bottomLeft";
                topLeft: "topLeft";
            }>;
            url: z.ZodString;
        }, z.core.$strip>>>;
        priority: z.ZodOptional<z.ZodNumber>;
        title: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    customer: z.ZodOptional<z.ZodObject<{
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            city: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lastName: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            streets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>>>;
        email: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lastName: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    displayGroup: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        pivots: z.ZodArray<z.ZodObject<{
            attributeRenderPreference: z.ZodOptional<z.ZodEnum<{
                swatches: "swatches";
                tabs: "tabs";
                dropdown: "dropdown";
                modal: "modal";
            }>>;
            code: z.ZodString;
            helpText: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            pivotType: z.ZodOptional<z.ZodEnum<{
                primary: "primary";
                secondary: "secondary";
            }>>;
            values: z.ZodArray<z.ZodObject<{
                helpText: z.ZodOptional<z.ZodString>;
                label: z.ZodString;
                products: z.ZodArray<z.ZodString>;
                swatchType: z.ZodOptional<z.ZodEnum<{
                    TEXT: "TEXT";
                    IMAGE: "IMAGE";
                    RGB: "RGB";
                }>>;
                swatchValue: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>>;
        products: z.ZodArray<z.ZodObject<{
            isCustomizable: z.ZodBoolean;
            mainImageUrl: z.ZodOptional<z.ZodString>;
            pivotValues: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            shortName: z.ZodOptional<z.ZodString>;
            sku: z.ZodString;
        }, z.core.$strip>>;
        shoutOuts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            display: z.ZodString;
            type: z.ZodEnum<{
                generic: "generic";
                product: "product";
                category: "category";
                group: "group";
                similar: "similar";
            }>;
            url: z.ZodString;
            value: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>>;
    }, z.core.$strip>>;
    order: z.ZodOptional<z.ZodObject<{
        billingAddress: z.ZodObject<{
            city: z.ZodString;
            company: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lastName: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            postal: z.ZodOptional<z.ZodString>;
            region: z.ZodOptional<z.ZodString>;
            streets: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        comments: z.ZodOptional<z.ZodString>;
        currencyCode: z.ZodOptional<z.ZodString>;
        customerIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        discounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            amount: z.ZodOptional<z.ZodNumber>;
            code: z.ZodOptional<z.ZodString>;
            description: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>>>;
        email: z.ZodOptional<z.ZodString>;
        firstName: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lastName: z.ZodOptional<z.ZodString>;
        lineItems: z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>;
        orderDate: z.ZodOptional<z.ZodString>;
        orderNumber: z.ZodString;
        payments: z.ZodOptional<z.ZodArray<z.ZodObject<{
            amount: z.ZodOptional<z.ZodNumber>;
            billToName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
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
        badges: z.ZodOptional<z.ZodArray<z.ZodString>>;
        brand: z.ZodOptional<z.ZodString>;
        browsable: z.ZodBoolean;
        content: z.ZodOptional<z.ZodObject<{
            breadcrumbs: z.ZodOptional<z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                url: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>;
            longDescription: z.ZodOptional<z.ZodString>;
            metaDescription: z.ZodOptional<z.ZodString>;
            metaKeywords: z.ZodOptional<z.ZodString>;
            metaTitle: z.ZodOptional<z.ZodString>;
            seoDescription: z.ZodOptional<z.ZodString>;
            shortDescription: z.ZodOptional<z.ZodString>;
            shortName: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        createdAt: z.ZodOptional<z.ZodString>;
        customization: z.ZodOptional<z.ZodObject<{
            prebuiltConfigurationId: z.ZodOptional<z.ZodString>;
            prebuiltCustomizable: z.ZodOptional<z.ZodBoolean>;
            prebuiltDesign: z.ZodOptional<z.ZodBoolean>;
            stockType: z.ZodOptional<z.ZodString>;
            styleType: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
        displayGroup: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        media: z.ZodOptional<z.ZodArray<z.ZodObject<{
            altText: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodString>;
            mediaType: z.ZodEnum<{
                image: "image";
                video: "video";
            }>;
            previewUrl: z.ZodOptional<z.ZodString>;
            tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                primary: "primary";
                small: "small";
                thumbnail: "thumbnail";
                yourLogoHere: "yourLogoHere";
                insideView: "insideView";
                swatch: "swatch";
                amazon: "amazon";
                carousel: "carousel";
                other: "other";
            }>>>;
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
            customLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
                max: z.ZodOptional<z.ZodNumber>;
                min: z.ZodNumber;
            }, z.core.$strip>>;
            customizable: z.ZodBoolean;
            designRequired: z.ZodBoolean;
            inStock: z.ZodBoolean;
            isReturnable: z.ZodBoolean;
            maxPrice: z.ZodNumber;
            minCustomizationQty: z.ZodOptional<z.ZodNumber>;
            minPrice: z.ZodNumber;
            minSaleQty: z.ZodOptional<z.ZodNumber>;
            onSale: z.ZodOptional<z.ZodBoolean>;
            plainLeadTimeDayRange: z.ZodOptional<z.ZodObject<{
                max: z.ZodOptional<z.ZodNumber>;
                min: z.ZodNumber;
            }, z.core.$strip>>;
            pricePercentOff: z.ZodOptional<z.ZodNumber>;
            quantityStepIncrements: z.ZodOptional<z.ZodArray<z.ZodObject<{
                requiredStepIncrement: z.ZodNumber;
                startingAtQty: z.ZodNumber;
            }, z.core.$strip>>>;
            stockQty: z.ZodNumber;
            suggestedQuantityDisplays: z.ZodOptional<z.ZodArray<z.ZodNumber>>;
            tierPrices: z.ZodArray<z.ZodObject<{
                discountReason: z.ZodOptional<z.ZodString>;
                price: z.ZodNumber;
                pricePercentOff: z.ZodOptional<z.ZodNumber>;
                salePrice: z.ZodOptional<z.ZodNumber>;
                startingAtQty: z.ZodNumber;
            }, z.core.$strip>>;
            toBeDiscontinued: z.ZodBoolean;
        }, z.core.$strip>>;
        searchable: z.ZodBoolean;
        sku: z.ZodString;
        specs: z.ZodRecord<z.ZodString, z.ZodAny>;
        status: z.ZodOptional<z.ZodString>;
        taxonomy: z.ZodObject<{
            master: z.ZodOptional<z.ZodString>;
            primary: z.ZodOptional<z.ZodString>;
            sub: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
        upc: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
        url: z.ZodArray<z.ZodObject<{
            metaData: z.ZodOptional<z.ZodObject<{
                creativeEngine: z.ZodOptional<z.ZodEnum<{
                    chili: "chili";
                    alchemy: "alchemy";
                }>>;
                designer: z.ZodOptional<z.ZodEnum<{
                    chili: "chili";
                    luma: "luma";
                    addrLogo: "addrLogo";
                }>>;
            }, z.core.$strip>>;
            url: z.ZodOptional<z.ZodString>;
            urlType: z.ZodOptional<z.ZodEnum<{
                product: "product";
                yourLogoHere: "yourLogoHere";
                customProduct: "customProduct";
            }>>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    productReview: z.ZodOptional<z.ZodObject<{
        detail: z.ZodOptional<z.ZodObject<{
            answeredQuestions: z.ZodOptional<z.ZodArray<z.ZodObject<{
                choices: z.ZodArray<z.ZodString>;
                selected: z.ZodOptional<z.ZodArray<z.ZodString>>;
                type: z.ZodLiteral<"Tag">;
            }, z.core.$strip>>>;
            comments: z.ZodOptional<z.ZodString>;
            createdAt: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            location: z.ZodOptional<z.ZodString>;
            maxRating: z.ZodOptional<z.ZodNumber>;
            media: z.ZodOptional<z.ZodArray<z.ZodObject<{
                altText: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodString>;
                mediaType: z.ZodEnum<{
                    image: "image";
                    video: "video";
                }>;
                previewUrl: z.ZodOptional<z.ZodString>;
                tags: z.ZodOptional<z.ZodArray<z.ZodEnum<{
                    primary: "primary";
                    small: "small";
                    thumbnail: "thumbnail";
                    yourLogoHere: "yourLogoHere";
                    insideView: "insideView";
                    swatch: "swatch";
                    amazon: "amazon";
                    carousel: "carousel";
                    other: "other";
                }>>>;
                url: z.ZodString;
            }, z.core.$strip>>>;
            merchantResponses: z.ZodOptional<z.ZodArray<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodString>;
                identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
                location: z.ZodOptional<z.ZodString>;
                nickname: z.ZodOptional<z.ZodString>;
                response: z.ZodOptional<z.ZodString>;
                responseType: z.ZodOptional<z.ZodLiteral<"merchantResponse">>;
                updatedAt: z.ZodOptional<z.ZodString>;
                votes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            }, z.core.$strip>>>;
            nickname: z.ZodOptional<z.ZodString>;
            rating: z.ZodOptional<z.ZodNumber>;
            sku: z.ZodString;
            source: z.ZodOptional<z.ZodLiteral<"email">>;
            title: z.ZodOptional<z.ZodString>;
            votes: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        }, z.core.$strip>>;
        summary: z.ZodOptional<z.ZodObject<{
            displayGroupId: z.ZodOptional<z.ZodNumber>;
            maxRating: z.ZodOptional<z.ZodNumber>;
            rating: z.ZodOptional<z.ZodNumber>;
            reviewCount: z.ZodOptional<z.ZodNumber>;
            sku: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>>;
    }, z.core.$strip>>;
    shipment: z.ZodOptional<z.ZodObject<{
        carrier: z.ZodOptional<z.ZodString>;
        comments: z.ZodOptional<z.ZodString>;
        currencyCode: z.ZodOptional<z.ZodString>;
        estimatedDeliveryDate: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        lineItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strip>>>;
        orderIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        orderNumber: z.ZodString;
        shipmentDate: z.ZodString;
        trackingNumber: z.ZodOptional<z.ZodString>;
        trackingUrl: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type All = z.infer<typeof All>;
//# sourceMappingURL=All.d.ts.map