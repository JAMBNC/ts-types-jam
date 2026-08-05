import { z } from "zod";
declare const _OAuth2ClientCredentials: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_client_credentials">;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    tokenUrl: z.ZodString;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
type _OAuth2ClientCredentialsSchema = typeof _OAuth2ClientCredentials;
export interface OAuth2ClientCredentialsSchema extends _OAuth2ClientCredentialsSchema {
}
/**OAuth2 client credentials for machine-to-machine.*/
export declare const OAuth2ClientCredentials: OAuth2ClientCredentialsSchema;
export type OAuth2ClientCredentials = z.infer<typeof OAuth2ClientCredentials>;
export {};
//# sourceMappingURL=OAuth2ClientCredentials.d.ts.map