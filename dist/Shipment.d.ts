import { z } from "zod";
declare const _Shipment: z.ZodObject<{
    carrier: z.ZodOptional<z.ZodString>;
    comments: z.ZodOptional<z.ZodString>;
    currencyCode: z.ZodOptional<z.ZodString>;
    estimatedDeliveryDate: z.ZodOptional<z.ZodString>;
    identifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    lineItems: z.ZodOptional<z.ZodArray<import("./LineItem.js").LineItemSchema>>;
    orderIdentifiers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    orderNumber: z.ZodString;
    shipmentDate: z.ZodString;
    trackingNumber: z.ZodOptional<z.ZodString>;
    trackingUrl: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _ShipmentSchema = typeof _Shipment;
export interface ShipmentSchema extends _ShipmentSchema {
}
export declare const Shipment: ShipmentSchema;
export type Shipment = z.infer<typeof Shipment>;
export {};
//# sourceMappingURL=Shipment.d.ts.map