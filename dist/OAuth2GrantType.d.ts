import { z } from "zod";
/**The OAuth2 grant type to use for obtaining tokens.*/
export declare const OAuth2GrantType: z.ZodEnum<{
    authorization_code: "authorization_code";
    client_credentials: "client_credentials";
    password: "password";
    refresh_token: "refresh_token";
}>;
export type OAuth2GrantType = z.infer<typeof OAuth2GrantType>;
//# sourceMappingURL=OAuth2GrantType.d.ts.map