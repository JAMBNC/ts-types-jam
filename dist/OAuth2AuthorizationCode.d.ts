import { z } from "zod";
/**OAuth2 authorization code grant for user-delegated authentication.*/
export declare const OAuth2AuthorizationCode: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_authorization_code">;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    authorizationUrl: z.ZodString;
    tokenUrl: z.ZodString;
    redirectUri: z.ZodString;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type OAuth2AuthorizationCode = z.infer<typeof OAuth2AuthorizationCode>;
//# sourceMappingURL=OAuth2AuthorizationCode.d.ts.map