import { z } from "zod";
declare const _Assets: z.ZodObject<{
    lamination: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        src: z.ZodString;
    }, z.core.$strict>>>;
}, z.core.$loose>;
type _AssetsSchema = typeof _Assets;
export interface AssetsSchema extends _AssetsSchema {
}
export declare const Assets: AssetsSchema;
export type Assets = z.infer<typeof Assets>;
export {};
//# sourceMappingURL=Assets.d.ts.map