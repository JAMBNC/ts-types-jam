import { z } from "zod";
/**Shipment tracking attached to a fulfillment. numbers holds one or more tracking numbers; company is the carrier name (channels that recognize it build clickable links).*/
export declare const TrackingInfo: z.ZodObject<{
    company: z.ZodUnion<readonly [z.ZodString, z.ZodNull]>;
    numbers: z.ZodArray<z.ZodString>;
    url: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNull]>>;
}, z.core.$strict>;
export type TrackingInfo = z.infer<typeof TrackingInfo>;
//# sourceMappingURL=TrackingInfo.d.ts.map