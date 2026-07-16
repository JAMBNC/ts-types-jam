import { z } from "zod";
/**A mapper-hydrated fulfillment order: enough for the backend to fulfill without calling the channel.*/
export declare const FulfillmentOrder: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    orderName: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    orderReference: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    status: z.ZodString;
    requestStatus: z.ZodString;
    destination: z.ZodUnion<readonly [z.ZodObject<{
        firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$loose>, z.ZodNull]>;
    lineItems: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        orderLineItemId: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        sku: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
        quantity: z.ZodNumber;
        remainingQuantity: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        variantTitle: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        unitPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        discountedUnitPrice: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        discountAllocations: z.ZodOptional<z.ZodArray<z.ZodObject<{
            amount: z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>;
            type: z.ZodEnum<{
                automatic: "automatic";
                code: "code";
                manual: "manual";
                script: "script";
                unknown: "unknown";
            }>;
            code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>>>;
        attributes: z.ZodOptional<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$strict>>>;
        taxLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            amount: z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>>>;
    }, z.core.$strict>>;
    deliveryMethod: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        methodType: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>, z.ZodNull]>>;
    order: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
        subtotal: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        totalTax: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        totalShipping: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        totalDiscounts: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        total: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            amount: z.ZodString;
            currencyCode: z.ZodString;
        }, z.core.$strict>, z.ZodNull]>>;
        shippingLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            carrier: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            price: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>, z.ZodNull]>>;
        }, z.core.$strict>>>;
        taxLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
            title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            ratePercentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
            amount: z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>;
        }, z.core.$strict>>>;
        discounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<{
                automatic: "automatic";
                code: "code";
                manual: "manual";
                script: "script";
                unknown: "unknown";
            }>;
            code: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            title: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>, z.ZodNull]>>;
            percentage: z.ZodOptional<z.ZodUnion<readonly [z.ZodNumber, z.ZodNull]>>;
        }, z.core.$strict>>>;
        transactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            kind: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            gateway: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            status: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            amount: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
                amount: z.ZodString;
                currencyCode: z.ZodString;
            }, z.core.$strict>, z.ZodNull]>>;
        }, z.core.$strict>>>;
        customer: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
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
            }, z.core.$loose>>>;
            email: z.ZodOptional<z.ZodString>;
            firstName: z.ZodOptional<z.ZodString>;
            identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
            lastName: z.ZodOptional<z.ZodString>;
        }, z.core.$loose>, z.ZodNull]>>;
        billingAddress: z.ZodOptional<z.ZodUnion<readonly [z.ZodObject<{
            firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            company: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            address1: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            address2: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            city: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            province: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            zip: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            countryCode: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
            email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        }, z.core.$loose>, z.ZodNull]>>;
    }, z.core.$strict>, z.ZodNull]>>;
    merchantMessage: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type FulfillmentOrder = z.infer<typeof FulfillmentOrder>;
//# sourceMappingURL=FulfillmentOrder.d.ts.map