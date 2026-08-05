import { z } from "zod";

const _OAuth2GrantType = z
  .enum([
    "client_credentials",
    "authorization_code",
    "refresh_token",
    "password",
  ])
  .describe("The OAuth2 grant type to use for obtaining tokens.");
type _OAuth2GrantTypeSchema = typeof _OAuth2GrantType;
export interface OAuth2GrantTypeSchema extends _OAuth2GrantTypeSchema {}
/**The OAuth2 grant type to use for obtaining tokens.*/
export const OAuth2GrantType: OAuth2GrantTypeSchema = _OAuth2GrantType;
export type OAuth2GrantType = z.infer<typeof OAuth2GrantType>;
