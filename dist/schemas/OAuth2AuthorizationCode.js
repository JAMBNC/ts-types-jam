import { z } from "zod";
/**OAuth2 authorization code grant for user-delegated authentication.*/
export const OAuth2AuthorizationCode = z
    .object({
    type: z.literal("oauth2_authorization_code"),
    /**The OAuth2 client ID.*/
    clientId: z.string().describe("The OAuth2 client ID."),
    /**The OAuth2 client secret.*/
    clientSecret: z.string().describe("The OAuth2 client secret."),
    /**The URL to redirect users for authorization.*/
    authorizationUrl: z
        .string()
        .url()
        .describe("The URL to redirect users for authorization."),
    /**The URL to exchange authorization codes for tokens.*/
    tokenUrl: z
        .string()
        .url()
        .describe("The URL to exchange authorization codes for tokens."),
    /**The redirect URI registered with the OAuth2 provider.*/
    redirectUri: z
        .string()
        .url()
        .describe("The redirect URI registered with the OAuth2 provider."),
    /**The scopes to request.*/
    scopes: z.array(z.string()).describe("The scopes to request.").optional(),
})
    .strict()
    .describe("OAuth2 authorization code grant for user-delegated authentication.");
