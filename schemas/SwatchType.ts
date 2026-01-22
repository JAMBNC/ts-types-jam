import { z } from "zod/v4";

export const SwatchType = z.enum(["TEXT", "IMAGE", "RGB"]);
export type SwatchType = z.infer<typeof SwatchType>;
