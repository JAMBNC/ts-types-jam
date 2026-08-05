import { z } from "zod";
declare const _ApiKey: z.ZodObject<{
    type: z.ZodLiteral<"apiKey">;
    key: z.ZodString;
    headerName: z.ZodDefault<z.ZodString>;
    in: z.ZodDefault<z.ZodEnum<{
        header: "header";
        query: "query";
    }>>;
}, z.core.$strict>;
type _ApiKeySchema = typeof _ApiKey;
export interface ApiKeySchema extends _ApiKeySchema {
}
/**API key authentication, typically sent as a header or query parameter.*/
export declare const ApiKey: ApiKeySchema;
export type ApiKey = z.infer<typeof ApiKey>;
export {};
//# sourceMappingURL=ApiKey.d.ts.map