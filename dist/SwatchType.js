import { z } from "zod";
export const SwatchType = z.enum(["TEXT", "IMAGE", "RGB"]);
