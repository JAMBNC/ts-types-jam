import { z } from "zod";
declare const _OAuth2RefreshToken: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_refresh_token">;
    clientId: z.ZodString;
    clientSecret: z.ZodOptional<z.ZodString>;
    tokenUrl: z.ZodString;
    refreshToken: z.ZodString;
}, z.core.$strict>;
type _OAuth2RefreshTokenSchema = typeof _OAuth2RefreshToken;
export interface OAuth2RefreshTokenSchema extends _OAuth2RefreshTokenSchema {
}
/**OAuth2 refresh token grant for obtaining new access tokens.*/
export declare const OAuth2RefreshToken: OAuth2RefreshTokenSchema;
export type OAuth2RefreshToken = z.infer<typeof OAuth2RefreshToken>;
export {};
//# sourceMappingURL=OAuth2RefreshToken.d.ts.map