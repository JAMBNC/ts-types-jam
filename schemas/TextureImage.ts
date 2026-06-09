import { z } from "zod";

export const TextureImage = z.object({ src: z.string() }).strict();
export type TextureImage = z.infer<typeof TextureImage>;
