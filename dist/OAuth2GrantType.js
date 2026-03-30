import { z } from "zod";
/**The OAuth2 grant type to use for obtaining tokens.*/
export const OAuth2GrantType = z
    .enum([
    "client_credentials",
    "authorization_code",
    "refresh_token",
    "password",
])
    .describe("The OAuth2 grant type to use for obtaining tokens.");
