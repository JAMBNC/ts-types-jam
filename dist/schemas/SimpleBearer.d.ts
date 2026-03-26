import { z } from "zod";
/**A bearer token that is sent in the Authorization header.*/
export declare const SimpleBearer: z.ZodObject<{
    type: z.ZodLiteral<"bearer">;
    token: z.ZodString;
}, z.core.$strict>;
export type SimpleBearer = z.infer<typeof SimpleBearer>;
//# sourceMappingURL=SimpleBearer.d.ts.map