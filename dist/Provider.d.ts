import { z } from "zod/v4";
export declare const Provider: z.ZodEnum<{
    FedEx: "FedEx";
    UPS: "UPS";
    USPS: "USPS";
    Other: "Other";
}>;
export type Provider = z.infer<typeof Provider>;
//# sourceMappingURL=Provider.d.ts.map