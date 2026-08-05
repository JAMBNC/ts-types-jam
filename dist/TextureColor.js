import { z } from "zod";
const _TextureColor = z.object({ hex: z.string() }).strict();
export const TextureColor = _TextureColor;
