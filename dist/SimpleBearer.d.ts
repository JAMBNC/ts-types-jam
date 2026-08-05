import { z } from "zod";
declare const _SimpleBearer: z.ZodObject<{
    type: z.ZodLiteral<"bearer">;
    token: z.ZodString;
}, z.core.$strict>;
type _SimpleBearerSchema = typeof _SimpleBearer;
export interface SimpleBearerSchema extends _SimpleBearerSchema {
}
/**A bearer token that is sent in the Authorization header.*/
export declare const SimpleBearer: SimpleBearerSchema;
export type SimpleBearer = z.infer<typeof SimpleBearer>;
export {};
//# sourceMappingURL=SimpleBearer.d.ts.map