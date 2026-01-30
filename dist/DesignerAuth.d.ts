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
    endpointAuth: z.ZodOptional<z.ZodDiscriminatedUnion<[z.ZodObject<{
        type: z.ZodLiteral<"bearer">;
        token: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"basic">;
        username: z.ZodString;
        password: z.ZodString;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"apiKey">;
        key: z.ZodString;
        headerName: z.ZodDefault<z.ZodString>;
        in: z.ZodDefault<z.ZodEnum<{
            header: "header";
            query: "query";
        }>>;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"oauth2_client_credentials">;
        clientId: z.ZodString;
        clientSecret: z.ZodString;
        tokenUrl: z.ZodString;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"oauth2_authorization_code">;
        clientId: z.ZodString;
        clientSecret: z.ZodString;
        authorizationUrl: z.ZodString;
        tokenUrl: z.ZodString;
        redirectUri: z.ZodString;
        scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>, z.ZodObject<{
        type: z.ZodLiteral<"oauth2_refresh_token">;
        clientId: z.ZodString;
        clientSecret: z.ZodOptional<z.ZodString>;
        tokenUrl: z.ZodString;
        refreshToken: z.ZodString;
    }, z.core.$strict>]>>;
}, z.core.$strict>;
export type DesignerAuth = z.infer<typeof DesignerAuth>;
//# sourceMappingURL=DesignerAuth.d.ts.map