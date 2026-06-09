import { z } from "zod";
export const TextureImage = z.object({ src: z.string() }).strict();
