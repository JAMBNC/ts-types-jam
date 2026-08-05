import { z } from "zod";
declare const _Provider: z.ZodEnum<{
    FedEx: "FedEx";
    Other: "Other";
    UPS: "UPS";
    USPS: "USPS";
}>;
type _ProviderSchema = typeof _Provider;
export interface ProviderSchema extends _ProviderSchema {
}
export declare const Provider: ProviderSchema;
export type Provider = z.infer<typeof Provider>;
export {};
//# sourceMappingURL=Provider.d.ts.map