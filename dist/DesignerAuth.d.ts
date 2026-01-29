import { z } from "zod";
export declare const DesignerAuth: z.ZodObject<{
    chiliAuth: z.ZodAny;
    endpointAuth: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
//# sourceMappingURL=DesignerAuth.d.ts.map