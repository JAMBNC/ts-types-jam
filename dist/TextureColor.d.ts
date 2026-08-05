import { z } from "zod";
declare const _TextureColor: z.ZodObject<{
    hex: z.ZodString;
}, z.core.$strict>;
type _TextureColorSchema = typeof _TextureColor;
export interface TextureColorSchema extends _TextureColorSchema {
}
export declare const TextureColor: TextureColorSchema;
export type TextureColor = z.infer<typeof TextureColor>;
export {};
//# sourceMappingURL=TextureColor.d.ts.map