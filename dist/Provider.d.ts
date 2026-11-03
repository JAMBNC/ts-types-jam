import { z } from "zod";
declare const _Provider: z.ZodEnum<{
    FedEx: "FedEx";
    UPS: "UPS";
    USPS: "USPS";
    Other: "Other";
}>;
type _ProviderSchema = typeof _Provider;
export interface ProviderSchema extends _ProviderSchema {
}
export declare const Provider: ProviderSchema;
export type Provider = z.infer<typeof Provider>;
export {};
//# sourceMappingURL=Provider.d.ts.map