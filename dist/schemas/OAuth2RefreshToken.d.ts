import { z } from "zod";
/**OAuth2 refresh token grant for obtaining new access tokens.*/
export declare const OAuth2RefreshToken: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_refresh_token">;
    clientId: z.ZodString;
    clientSecret: z.ZodOptional<z.ZodString>;
    tokenUrl: z.ZodString;
    refreshToken: z.ZodString;
}, z.core.$strict>;
export type OAuth2RefreshToken = z.infer<typeof OAuth2RefreshToken>;
//# sourceMappingURL=OAuth2RefreshToken.d.ts.map