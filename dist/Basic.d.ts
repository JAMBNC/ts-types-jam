import { z } from "zod";
declare const _Basic: z.ZodObject<{
    type: z.ZodLiteral<"basic">;
    username: z.ZodString;
    password: z.ZodString;
}, z.core.$strict>;
type _BasicSchema = typeof _Basic;
export interface BasicSchema extends _BasicSchema {
}
/**Basic authentication using a username and password.*/
export declare const Basic: BasicSchema;
export type Basic = z.infer<typeof Basic>;
export {};
//# sourceMappingURL=Basic.d.ts.map