import { z } from "zod";
/**API key authentication, typically sent as a header or query parameter.*/
export declare const ApiKey: z.ZodObject<{
    type: z.ZodLiteral<"apiKey">;
    key: z.ZodString;
    headerName: z.ZodDefault<z.ZodString>;
    in: z.ZodDefault<z.ZodEnum<{
        header: "header";
        query: "query";
    }>>;
}, z.core.$strict>;
export type ApiKey = z.infer<typeof ApiKey>;
//# sourceMappingURL=ApiKey.d.ts.map