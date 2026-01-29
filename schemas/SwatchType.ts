import { z } from "zod";

export const SwatchType = z.enum(["TEXT", "IMAGE", "RGB"]);
export type SwatchType = z.infer<typeof SwatchType>;
