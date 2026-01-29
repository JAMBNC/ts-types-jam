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
  attribute: z
    .object({
      code: z.string(),
      displayForCustomer: z.boolean(),
      identifiers: z.record(z.any()).optional(),
      label: z.string(),
      predefinedValues: z
        .array(
          z.object({
            identifiers: z.record(z.any()),
            swatches: z.record(z.any()).optional(),
            value: z.string(),
          }),
        )
        .optional(),
      renderPreference: z.enum(["tabs", "dropdown", "swatches", "modal"]),
      secondarySelectionEnabled: z.boolean(),
      usedForProductSelection: z.boolean(),
    })
    .optional(),
  badge: z
    .object({
      code: z.string(),
      images: z
        .array(
          z.object({
            context: z.enum(["product_detail", "product_listing"]),
            position: z.enum([
              "topRight",
              "bottomRight",
              "bottomLeft",
              "topLeft",
            ]),
            url: z.string(),
          }),
        )
        .optional(),
      priority: z.number().int().optional(),
      title: z.string().optional(),
    })
    .optional(),
  customer: z
    .object({
      addresses: z
        .array(
          z.object({
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
        )
        .optional(),
      email: z.string().optional(),
      firstName: z.string().optional(),
      identifiers: z.record(z.any()).optional(),
      lastName: z.string().optional(),
    })
    .optional(),
  displayGroup: z
    .object({
      id: z.string(),
      identifiers: z.record(z.any()).optional(),
      pivots: z.array(
        z.object({
          attributeRenderPreference: z
            .enum(["tabs", "dropdown", "swatches", "modal"])
            .optional(),
          code: z.string(),
          helpText: z.string().optional(),
          label: z.string().optional(),
          pivotType: z.enum(["primary", "secondary"]).optional(),
          values: z.array(
            z.object({
              helpText: z.string().optional(),
              label: z.string(),
              products: z.array(z.string()),
              swatchType: z.enum(["TEXT", "IMAGE", "RGB"]).optional(),
              swatchValue: z.string().optional(),
            }),
          ),
        }),
      ),
      products: z.array(
        z.object({
          isCustomizable: z.boolean(),
          mainImageUrl: z.string().optional(),
          pivotValues: z.record(z.any()).optional(),
          shortName: z.string().optional(),
          sku: z.string(),
        }),
      ),
      shoutOuts: z
        .array(
          z.object({
            display: z.string(),
            type: z.enum([
              "generic",
              "product",
              "category",
              "group",
              "similar",
            ]),
            url: z.string(),
            value: z.string().optional(),
          }),
        )
        .optional(),
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
        .array(
          z.object({
            amount: z.number().gte(0).optional(),
            code: z.string().optional(),
            description: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
          }),
        )
        .optional(),
      email: z.string().optional(),
      firstName: z.string().optional(),
      identifiers: z.record(z.any()).optional(),
      lastName: z.string().optional(),
      lineItems: z
        .array(
          z.object({
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
          }),
        )
        .min(1),
      orderDate: z.string().datetime({ offset: true }).optional(),
      orderNumber: z
        .string()
        .min(1)
        .max(50)
        .describe(
          "Globally unique orderNumber.  Usually a combination of sales channel and order number",
        ),
      payments: z
        .array(
          z.object({
            amount: z.number().gte(0).optional(),
            billToName: z.string().optional(),
            identifiers: z.record(z.any()).optional(),
            method: z.enum(["CASH", "PO", "CREDIT_CARD", "ON_ACCOUNT"]),
            paymentDate: z.string().datetime({ offset: true }).optional(),
            poNumber: z.string().optional(),
            status: z.string().optional(),
          }),
        )
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
      badges: z.array(z.string()).optional(),
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
      identifiers: z.record(z.any()).optional(),
      media: z
        .array(
          z.object({
            altText: z.string().optional(),
            label: z.string().optional(),
            mediaType: z.enum(["image", "video"]),
            previewUrl: z.string().optional(),
            tags: z
              .array(
                z.enum([
                  "primary",
                  "small",
                  "thumbnail",
                  "yourLogoHere",
                  "insideView",
                  "swatch",
                  "amazon",
                  "carousel",
                  "other",
                ]),
              )
              .optional(),
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
            .array(
              z.object({
                requiredStepIncrement: z.number().int(),
                startingAtQty: z.number().int(),
              }),
            )
            .optional(),
          stockQty: z.number().int().gte(0),
          suggestedQuantityDisplays: z.array(z.number().int()).optional(),
          tierPrices: z.array(
            z.object({
              discountReason: z.string().optional(),
              price: z.number(),
              pricePercentOff: z.number().optional(),
              salePrice: z.number().optional(),
              startingAtQty: z.number().int(),
            }),
          ),
          toBeDiscontinued: z.boolean(),
        })
        .optional(),
      searchable: z.boolean(),
      sku: z.string(),
      specs: z.record(z.any()),
      status: z.string().optional(),
      taxonomy: z.object({
        master: z.string().optional(),
        primary: z.string().optional(),
        sub: z.string().optional(),
      }),
      upc: z.string().optional(),
      updatedAt: z.string().datetime({ offset: true }).optional(),
      url: z
        .array(
          z.object({
            metaData: z
              .object({
                creativeEngine: z.enum(["chili", "alchemy"]).optional(),
                designer: z.enum(["chili", "luma", "addrLogo"]).optional(),
              })
              .optional(),
            url: z.string().optional(),
            urlType: z
              .enum(["product", "customProduct", "yourLogoHere"])
              .optional(),
          }),
        )
        .min(1),
    })
    .optional(),
  productReview: z
    .object({
      detail: z
        .object({
          answeredQuestions: z
            .array(
              z.object({
                choices: z.array(z.string()),
                selected: z.array(z.string()).optional(),
                type: z.literal("Tag"),
              }),
            )
            .optional(),
          comments: z.string().optional(),
          createdAt: z.string().datetime({ offset: true }).optional(),
          identifiers: z.record(z.any()).optional(),
          location: z.string().optional(),
          maxRating: z.number().optional(),
          media: z
            .array(
              z.object({
                altText: z.string().optional(),
                label: z.string().optional(),
                mediaType: z.enum(["image", "video"]),
                previewUrl: z.string().optional(),
                tags: z
                  .array(
                    z.enum([
                      "primary",
                      "small",
                      "thumbnail",
                      "yourLogoHere",
                      "insideView",
                      "swatch",
                      "amazon",
                      "carousel",
                      "other",
                    ]),
                  )
                  .optional(),
                url: z.string(),
              }),
            )
            .optional(),
          merchantResponses: z
            .array(
              z.object({
                createdAt: z.string().datetime({ offset: true }).optional(),
                identifiers: z.record(z.any()).optional(),
                location: z.string().optional(),
                nickname: z.string().optional(),
                response: z.string().optional(),
                responseType: z.literal("merchantResponse").optional(),
                updatedAt: z.string().datetime({ offset: true }).optional(),
                votes: z.record(z.any()).optional(),
              }),
            )
            .optional(),
          nickname: z.string().optional(),
          rating: z.number().optional(),
          sku: z.string(),
          source: z.literal("email").optional(),
          title: z.string().optional(),
          votes: z.record(z.any()).optional(),
        })
        .optional(),
      summary: z
        .object({
          displayGroupId: z.number().int().optional(),
          maxRating: z.number().optional(),
          rating: z.number().optional(),
          reviewCount: z.number().int().optional(),
          sku: z.string().optional(),
        })
        .optional(),
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
        .array(
          z.object({
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
          }),
        )
        .optional(),
      orderIdentifiers: z.record(z.any()).optional(),
      orderNumber: z
        .string()
        .min(1)
        .max(50)
        .describe(
          "Globally unique orderNumber.  Usually a combination of sales channel and order number",
        ),
      shipmentDate: z.string().datetime({ offset: true }),
      trackingNumber: z.string().optional(),
      trackingUrl: z.string().optional(),
    })
    .optional(),
});
export type All = z.infer<typeof All>;
