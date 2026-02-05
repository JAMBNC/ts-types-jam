import { z } from "zod";
import { ApiKey } from "./ApiKey.js";
import { Basic } from "./Basic.js";
import { OAuth2AuthorizationCode } from "./OAuth2AuthorizationCode.js";
import { OAuth2ClientCredentials } from "./OAuth2ClientCredentials.js";
import { OAuth2RefreshToken } from "./OAuth2RefreshToken.js";
import { SimpleBearer } from "./SimpleBearer.js";
/**A discriminated union of all supported authentication types.*/
export const Auth = z
    .discriminatedUnion("type", [
    SimpleBearer,
    Basic,
    ApiKey,
    OAuth2ClientCredentials,
    OAuth2AuthorizationCode,
    OAuth2RefreshToken,
])
    .describe("A discriminated union of all supported authentication types.");
