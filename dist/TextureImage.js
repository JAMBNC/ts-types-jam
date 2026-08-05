import { z } from "zod";
const _TextureImage = z.object({ src: z.string() }).strict();
export const TextureImage = _TextureImage;
