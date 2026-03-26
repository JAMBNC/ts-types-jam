import { z } from "zod";
export declare const Shipment: z.ZodObject<{
    carrier: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    estimatedDeliveryDate: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lineItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }, z.core.$loose>>>;
    orderIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    orderNumber: z.ZodString;
    shipmentDate: z.ZodString;
    trackingNumber: z.ZodOptional<z.ZodString>;
    trackingUrl: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
export type Shipment = z.infer<typeof Shipment>;
//# sourceMappingURL=Shipment.d.ts.map