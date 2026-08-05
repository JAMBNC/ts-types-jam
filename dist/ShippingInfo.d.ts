import { z } from "zod";
declare const _ShippingInfo: z.ZodObject<{
    accountNumber: z.ZodOptional<z.ZodString>;
    accountType: z.ZodOptional<z.ZodString>;
    isBlindShipping: z.ZodDefault<z.ZodBoolean>;
    method: z.ZodOptional<z.ZodString>;
    provider: z.ZodOptional<import("./Provider.js").ProviderSchema>;
    weightInPounds: z.ZodOptional<z.ZodNumber>;
}, z.core.$loose>;
type _ShippingInfoSchema = typeof _ShippingInfo;
export interface ShippingInfoSchema extends _ShippingInfoSchema {
}
export declare const ShippingInfo: ShippingInfoSchema;
export type ShippingInfo = z.infer<typeof ShippingInfo>;
export {};
//# sourceMappingURL=ShippingInfo.d.ts.map