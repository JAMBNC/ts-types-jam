import { z } from "zod";
declare const _OAuth2GrantType: z.ZodEnum<{
    authorization_code: "authorization_code";
    client_credentials: "client_credentials";
    password: "password";
    refresh_token: "refresh_token";
}>;
type _OAuth2GrantTypeSchema = typeof _OAuth2GrantType;
export interface OAuth2GrantTypeSchema extends _OAuth2GrantTypeSchema {
}
/**The OAuth2 grant type to use for obtaining tokens.*/
export declare const OAuth2GrantType: OAuth2GrantTypeSchema;
export type OAuth2GrantType = z.infer<typeof OAuth2GrantType>;
export {};
//# sourceMappingURL=OAuth2GrantType.d.ts.map