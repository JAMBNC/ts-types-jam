import { z } from "zod";
declare const _Auth: z.ZodDiscriminatedUnion<[import("./SimpleBearer.js").SimpleBearerSchema, import("./Basic.js").BasicSchema, import("./ApiKey.js").ApiKeySchema, import("./OAuth2ClientCredentials.js").OAuth2ClientCredentialsSchema, import("./OAuth2AuthorizationCode.js").OAuth2AuthorizationCodeSchema, import("./OAuth2RefreshToken.js").OAuth2RefreshTokenSchema]>;
type _AuthSchema = typeof _Auth;
export interface AuthSchema extends _AuthSchema {
}
/**A discriminated union of all supported authentication types.*/
export declare const Auth: AuthSchema;
export type Auth = z.infer<typeof Auth>;
export {};
//# sourceMappingURL=Auth.d.ts.map