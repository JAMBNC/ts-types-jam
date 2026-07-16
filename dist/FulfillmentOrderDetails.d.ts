import { z } from "zod";
/**Order-level financial and party detail hydrated alongside the fulfillment order. Amounts are in the shop currency.*/
export declare const FulfillmentOrderDetails: z.ZodObject<{
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
        id: z.ZodString;
        firstName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        lastName: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        email: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
        phone: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
    }, z.core.$strict>, z.ZodNull]>>;
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
}, z.core.$strict>;
export type FulfillmentOrderDetails = z.infer<typeof FulfillmentOrderDetails>;
//# sourceMappingURL=FulfillmentOrderDetails.d.ts.map