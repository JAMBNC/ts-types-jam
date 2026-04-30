import { z } from "zod";
export declare const DefaultTrackingPayload: z.ZodObject<{
    designer: z.ZodEnum<{
        base: "base";
        hermes: "hermes";
    }>;
    merchant: z.ZodString;
    deltaTime: z.ZodNumber;
}, z.core.$strict>;
export type DefaultTrackingPayload = z.infer<typeof DefaultTrackingPayload>;
//# sourceMappingURL=DefaultTrackingPayload.d.ts.map