import { z } from "zod";

/**OAuth2 refresh token grant for obtaining new access tokens.*/
export const OAuth2RefreshToken = z
  .object({
    type: z.literal("oauth2_refresh_token"),
    /**The OAuth2 client ID.*/
    clientId: z.string().describe("The OAuth2 client ID."),
    /**The OAuth2 client secret.*/
    clientSecret: z.string().describe("The OAuth2 client secret.").optional(),
    /**The URL to obtain new access tokens.*/
    tokenUrl: z.string().url().describe("The URL to obtain new access tokens."),
    /**The refresh token value.*/
    refreshToken: z.string().describe("The refresh token value."),
  })
  .strict()
  .describe("OAuth2 refresh token grant for obtaining new access tokens.");
export type OAuth2RefreshToken = z.infer<typeof OAuth2RefreshToken>;
