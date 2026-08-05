import { z } from "zod";

const _TextureColor = z.object({ hex: z.string() }).strict();
type _TextureColorSchema = typeof _TextureColor;
export interface TextureColorSchema extends _TextureColorSchema {}
export const TextureColor: TextureColorSchema = _TextureColor;
export type TextureColor = z.infer<typeof TextureColor>;
