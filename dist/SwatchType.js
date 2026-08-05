import { z } from "zod";
const _SwatchType = z.enum(["TEXT", "IMAGE", "RGB"]);
export const SwatchType = _SwatchType;
