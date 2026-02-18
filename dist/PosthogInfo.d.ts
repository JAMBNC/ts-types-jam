import { z } from "zod";
export declare const PosthogInfo: z.ZodObject<{
    userIdentity: z.ZodOptional<z.ZodAny>;
    apiHost: z.ZodString;
    apiKey: z.ZodObject<{
        type: z.ZodLiteral<"apiKey">;
        key: z.ZodString;
        headerName: z.ZodDefault<z.ZodString>;
        in: z.ZodDefault<z.ZodEnum<{
            header: "header";
            query: "query";
        }>>;
    }, z.core.$strict>;
}, z.core.$loose>;
export type PosthogInfo = z.infer<typeof PosthogInfo>;
//# sourceMappingURL=PosthogInfo.d.ts.map