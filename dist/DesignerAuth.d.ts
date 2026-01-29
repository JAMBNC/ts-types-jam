import { z } from "zod";
export declare const DesignerAuth: z.ZodObject<{
    chiliAuth: z.ZodObject<{
        type: z.ZodLiteral<"apiKey">;
        key: z.ZodString;
        headerName: z.ZodDefault<z.ZodString>;
        in: z.ZodDefault<z.ZodEnum<{
            header: "header";
            query: "query";
        }>>;
    }, z.core.$strict>;
    endpointAuth: z.ZodOptional<z.ZodAny>;
}, z.core.$strip>;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
//# sourceMappingURL=DesignerAuth.d.ts.map