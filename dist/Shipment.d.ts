import { z } from "zod";
export declare const Shipment: z.ZodObject<{
    carrier: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    estimatedDeliveryDate: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    lineItems: z.ZodOptional<z.ZodArray<z.ZodAny>>;
    orderIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodAny, z.core.SomeType>>;
    orderNumber: z.ZodString;
    shipmentDate: z.ZodString;
    trackingNumber: z.ZodOptional<z.ZodString>;
    trackingUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type Shipment = z.infer<typeof Shipment>;
//# sourceMappingURL=Shipment.d.ts.map