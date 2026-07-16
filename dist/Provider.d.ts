import { z } from "zod";
export declare const Provider: z.ZodEnum<{
    FedEx: "FedEx";
    Other: "Other";
    UPS: "UPS";
    USPS: "USPS";
}>;
export type Provider = z.infer<typeof Provider>;
//# sourceMappingURL=Provider.d.ts.map