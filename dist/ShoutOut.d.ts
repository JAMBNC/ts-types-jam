import { z } from "zod";
declare const _ShoutOut: z.ZodObject<{
    type: import("./ShoutOutType.js").ShoutOutTypeSchema;
    display: z.ZodString;
    url: z.ZodString;
    value: z.ZodOptional<z.ZodString>;
}, z.core.$loose>;
type _ShoutOutSchema = typeof _ShoutOut;
export interface ShoutOutSchema extends _ShoutOutSchema {
}
export declare const ShoutOut: ShoutOutSchema;
export type ShoutOut = z.infer<typeof ShoutOut>;
export {};
//# sourceMappingURL=ShoutOut.d.ts.map