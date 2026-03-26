import { z } from "zod";
/**Basic authentication using a username and password.*/
export declare const Basic: z.ZodObject<{
    type: z.ZodLiteral<"basic">;
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strict>;
export type Basic = z.infer<typeof Basic>;
//# sourceMappingURL=Basic.d.ts.map