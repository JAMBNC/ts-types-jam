import { z } from "zod";

/**OAuth2 client credentials for machine-to-machine.*/
export const OAuth2ClientCredentials = z
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
    scopes: z.array(z.string()).describe("The scopes to request.").optional(),
  })
  .strict()
  .describe("OAuth2 client credentials for machine-to-machine.");
export type OAuth2ClientCredentials = z.infer<typeof OAuth2ClientCredentials>;
