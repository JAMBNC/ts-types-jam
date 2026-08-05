import { z } from "zod";
declare const _OAuth2AuthorizationCode: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_authorization_code">;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    authorizationUrl: z.ZodString;
    tokenUrl: z.ZodString;
    redirectUri: z.ZodString;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type _OAuth2AuthorizationCodeSchema = typeof _OAuth2AuthorizationCode;
export interface OAuth2AuthorizationCodeSchema extends _OAuth2AuthorizationCodeSchema {
}
/**OAuth2 authorization code grant for user-delegated authentication.*/
export declare const OAuth2AuthorizationCode: OAuth2AuthorizationCodeSchema;
export type OAuth2AuthorizationCode = z.infer<typeof OAuth2AuthorizationCode>;
export {};
//# sourceMappingURL=OAuth2AuthorizationCode.d.ts.map