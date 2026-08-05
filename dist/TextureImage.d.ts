import { z } from "zod";
declare const _TextureImage: z.ZodObject<{
    src: z.ZodString;
}, z.core.$strict>;
type _TextureImageSchema = typeof _TextureImage;
export interface TextureImageSchema extends _TextureImageSchema {
}
export declare const TextureImage: TextureImageSchema;
export type TextureImage = z.infer<typeof TextureImage>;
export {};
//# sourceMappingURL=TextureImage.d.ts.map