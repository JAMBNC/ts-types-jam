import { z } from "zod";
export declare const Order: z.ZodObject<{
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
}, z.core.$strip>;
export type Order = z.infer<typeof Order>;
//# sourceMappingURL=Order.d.ts.map