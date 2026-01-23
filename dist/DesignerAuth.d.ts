import { z } from "zod/v4";
export declare const DesignerAuth: z.ZodObject<{
    chiliAuth: z.ZodOptional<z.ZodString>;
    endpointAuth: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
//# sourceMappingURL=DesignerAuth.d.ts.map