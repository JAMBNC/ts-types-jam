import { z } from "zod";
export declare const VerificationStatus: z.ZodObject<{
    exists: z.ZodString;
    "product-support": z.ZodString;
    purchase: z.ZodString;
    api: z.ZodString;
}, z.core.$loose>;
export type VerificationStatus = z.infer<typeof VerificationStatus>;
//# sourceMappingURL=VerificationStatus.d.ts.map