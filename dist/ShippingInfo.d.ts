import { z } from "zod";
export declare const ShippingInfo: z.ZodObject<{
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
}, z.core.$loose>;
export type ShippingInfo = z.infer<typeof ShippingInfo>;
//# sourceMappingURL=ShippingInfo.d.ts.map