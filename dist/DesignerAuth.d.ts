import { z } from "zod";
export declare const DesignerAuth: z.ZodObject<{
    chiliAuth: z.ZodString;
    endpointAuth: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
//# sourceMappingURL=DesignerAuth.d.ts.map