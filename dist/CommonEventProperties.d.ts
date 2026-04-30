import { z } from "zod";
/**Event properties shared between many events*/
export declare const CommonEventProperties: z.ZodObject<{
    designer: z.ZodEnum<{
        base: "base";
        hermes: "hermes";
    }>;
    merchant: z.ZodString;
    deltaTime: z.ZodNumber;
}, z.core.$loose>;
export type CommonEventProperties = z.infer<typeof CommonEventProperties>;
//# sourceMappingURL=CommonEventProperties.d.ts.map