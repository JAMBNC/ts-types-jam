import { z } from "zod";

const _TextureImage = z.object({ src: z.string() }).strict();
type _TextureImageSchema = typeof _TextureImage;
export interface TextureImageSchema extends _TextureImageSchema {}
export const TextureImage: TextureImageSchema = _TextureImage;
export type TextureImage = z.infer<typeof TextureImage>;
