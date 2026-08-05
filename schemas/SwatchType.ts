import { z } from "zod";

const _SwatchType = z.enum(["TEXT", "IMAGE", "RGB"]);
type _SwatchTypeSchema = typeof _SwatchType;
export interface SwatchTypeSchema extends _SwatchTypeSchema {}
export const SwatchType: SwatchTypeSchema = _SwatchType;
export type SwatchType = z.infer<typeof SwatchType>;
