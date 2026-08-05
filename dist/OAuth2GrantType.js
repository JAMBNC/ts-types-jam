import { z } from "zod";
const _OAuth2GrantType = z
    .enum([
    "client_credentials",
    "authorization_code",
    "refresh_token",
    "password",
])
    .describe("The OAuth2 grant type to use for obtaining tokens.");
/**The OAuth2 grant type to use for obtaining tokens.*/
export const OAuth2GrantType = _OAuth2GrantType;
