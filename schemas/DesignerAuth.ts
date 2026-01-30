import { z } from "zod";

export const DesignerAuth = z.object({
  /**A discriminated union of all supported authentication types.*/
  chiliAuth: z
    .union([
      z
        .object({
          type: z.literal("bearer"),
          /**The bearer token value.*/
          token: z.string().describe("The bearer token value."),
        })
        .strict()
        .describe("A bearer token that is sent in the Authorization header."),
      z
        .object({
          type: z.literal("basic"),
          /**The username for authentication.*/
          username: z.string().describe("The username for authentication."),
          /**The password for authentication.*/
          password: z.string().describe("The password for authentication."),
        })
        .strict()
        .describe("Basic authentication using a username and password."),
      z
        .object({
          type: z.literal("apiKey"),
          /**The API key value.*/
          key: z.string().describe("The API key value."),
          /**The header name to use for the API key.*/
          headerName: z
            .string()
            .describe("The header name to use for the API key.")
            .default("X-API-Key"),
          /**Where to send the API key.*/
          in: z
            .enum(["header", "query"])
            .describe("Where to send the API key.")
            .default("header"),
        })
        .strict()
        .describe(
          "API key authentication, typically sent as a header or query parameter.",
        ),
      z
        .object({
          type: z.literal("oauth2_client_credentials"),
          /**The OAuth2 client ID.*/
          clientId: z.string().describe("The OAuth2 client ID."),
          /**The OAuth2 client secret.*/
          clientSecret: z.string().describe("The OAuth2 client secret."),
          /**The URL to obtain access tokens from.*/
          tokenUrl: z
            .string()
            .url()
            .describe("The URL to obtain access tokens from."),
          /**The scopes to request.*/
          scopes: z
            .array(z.string())
            .describe("The scopes to request.")
            .optional(),
        })
        .strict()
        .describe("OAuth2 client credentials for machine-to-machine."),
      z
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
          scopes: z
            .array(z.string())
            .describe("The scopes to request.")
            .optional(),
        })
        .strict()
        .describe(
          "OAuth2 authorization code grant for user-delegated authentication.",
        ),
      z
        .object({
          type: z.literal("oauth2_refresh_token"),
          /**The OAuth2 client ID.*/
          clientId: z.string().describe("The OAuth2 client ID."),
          /**The OAuth2 client secret.*/
          clientSecret: z
            .string()
            .describe("The OAuth2 client secret.")
            .optional(),
          /**The URL to obtain new access tokens.*/
          tokenUrl: z
            .string()
            .url()
            .describe("The URL to obtain new access tokens."),
          /**The refresh token value.*/
          refreshToken: z.string().describe("The refresh token value."),
        })
        .strict()
        .describe(
          "OAuth2 refresh token grant for obtaining new access tokens.",
        ),
    ])
    .describe("A discriminated union of all supported authentication types."),
  /**A discriminated union of all supported authentication types.*/
  endpointAuth: z
    .union([
      z
        .object({
          type: z.literal("bearer"),
          /**The bearer token value.*/
          token: z.string().describe("The bearer token value."),
        })
        .strict()
        .describe("A bearer token that is sent in the Authorization header."),
      z
        .object({
          type: z.literal("basic"),
          /**The username for authentication.*/
          username: z.string().describe("The username for authentication."),
          /**The password for authentication.*/
          password: z.string().describe("The password for authentication."),
        })
        .strict()
        .describe("Basic authentication using a username and password."),
      z
        .object({
          type: z.literal("apiKey"),
          /**The API key value.*/
          key: z.string().describe("The API key value."),
          /**The header name to use for the API key.*/
          headerName: z
            .string()
            .describe("The header name to use for the API key.")
            .default("X-API-Key"),
          /**Where to send the API key.*/
          in: z
            .enum(["header", "query"])
            .describe("Where to send the API key.")
            .default("header"),
        })
        .strict()
        .describe(
          "API key authentication, typically sent as a header or query parameter.",
        ),
      z
        .object({
          type: z.literal("oauth2_client_credentials"),
          /**The OAuth2 client ID.*/
          clientId: z.string().describe("The OAuth2 client ID."),
          /**The OAuth2 client secret.*/
          clientSecret: z.string().describe("The OAuth2 client secret."),
          /**The URL to obtain access tokens from.*/
          tokenUrl: z
            .string()
            .url()
            .describe("The URL to obtain access tokens from."),
          /**The scopes to request.*/
          scopes: z
            .array(z.string())
            .describe("The scopes to request.")
            .optional(),
        })
        .strict()
        .describe("OAuth2 client credentials for machine-to-machine."),
      z
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
          scopes: z
            .array(z.string())
            .describe("The scopes to request.")
            .optional(),
        })
        .strict()
        .describe(
          "OAuth2 authorization code grant for user-delegated authentication.",
        ),
      z
        .object({
          type: z.literal("oauth2_refresh_token"),
          /**The OAuth2 client ID.*/
          clientId: z.string().describe("The OAuth2 client ID."),
          /**The OAuth2 client secret.*/
          clientSecret: z
            .string()
            .describe("The OAuth2 client secret.")
            .optional(),
          /**The URL to obtain new access tokens.*/
          tokenUrl: z
            .string()
            .url()
            .describe("The URL to obtain new access tokens."),
          /**The refresh token value.*/
          refreshToken: z.string().describe("The refresh token value."),
        })
        .strict()
        .describe(
          "OAuth2 refresh token grant for obtaining new access tokens.",
        ),
    ])
    .describe("A discriminated union of all supported authentication types.")
    .optional(),
});
export type DesignerAuth = z.infer<typeof DesignerAuth>;
