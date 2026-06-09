import { z } from "zod";
export const TextureColor = z.object({ hex: z.string() }).strict();
