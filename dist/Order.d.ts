import { z } from "zod";
export declare const Order: z.ZodObject<{
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
    }, z.core.$loose>;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    customerIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    discounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        amount: z.ZodOptional<z.ZodNumber>;
        code: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    }, z.core.$loose>>>;
    email: z.ZodOptional<z.ZodString>;
    firstName: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lastName: z.ZodOptional<z.ZodString>;
    lineItems: z.ZodArray<z.ZodObject<{
        children: z.ZodOptional<z.ZodArray<z.ZodAny>>;
        discountAmount: z.ZodDefault<z.ZodNumber>;
        identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        imageUrls: z.ZodOptional<z.ZodArray<z.ZodString>>;
        name: z.ZodString;
        productIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        quantity: z.ZodNumber;
        sku: z.ZodString;
        subtotal: z.ZodDefault<z.ZodNumber>;
        taxAmount: z.ZodDefault<z.ZodNumber>;
        total: z.ZodDefault<z.ZodNumber>;
        weightInPounds: z.ZodDefault<z.ZodNumber>;
    }, z.core.$loose>>;
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
    }, z.core.$loose>>>;
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
    }, z.core.$loose>>;
    shippingAmount: z.ZodDefault<z.ZodNumber>;
    shippingInfo: z.ZodOptional<z.ZodObject<{
        accountNumber: z.ZodOptional<z.ZodString>;
        accountType: z.ZodOptional<z.ZodString>;
        isBlindShipping: z.ZodDefault<z.ZodBoolean>;
        method: z.ZodOptional<z.ZodString>;
        provider: z.ZodOptional<z.ZodEnum<{
            FedEx: "FedEx";
            UPS: "UPS";
            USPS: "USPS";
            Other: "Other";
        }>>;
        weightInPounds: z.ZodOptional<z.ZodNumber>;
    }, z.core.$loose>>;
    status: z.ZodOptional<z.ZodLiteral<"CREATED">>;
    subtotal: z.ZodDefault<z.ZodNumber>;
    taxAmount: z.ZodDefault<z.ZodNumber>;
    total: z.ZodDefault<z.ZodNumber>;
}, z.core.$loose>;
export type Order = z.infer<typeof Order>;
//# sourceMappingURL=Order.d.ts.map