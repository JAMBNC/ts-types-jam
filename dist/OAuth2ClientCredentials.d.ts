import { z } from "zod";
/**OAuth2 client credentials for machine-to-machine.*/
export declare const OAuth2ClientCredentials: z.ZodObject<{
    type: z.ZodLiteral<"oauth2_client_credentials">;
    clientId: z.ZodString;
    clientSecret: z.ZodString;
    tokenUrl: z.ZodString;
    scopes: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>;
export type OAuth2ClientCredentials = z.infer<typeof OAuth2ClientCredentials>;
//# sourceMappingURL=OAuth2ClientCredentials.d.ts.map