import { z } from "zod";
import { ShoutOutType } from "./ShoutOutType.js";

const _ShoutOut = z
  .object({
    type: ShoutOutType,
    display: z.string(),
    url: z.string(),
    value: z.string().optional(),
  })
  .passthrough();
type _ShoutOutSchema = typeof _ShoutOut;
export interface ShoutOutSchema extends _ShoutOutSchema {}
export const ShoutOut: ShoutOutSchema = _ShoutOut;
export type ShoutOut = z.infer<typeof ShoutOut>;
