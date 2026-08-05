import { z } from "zod";

const _ShoutOutType = z.enum([
  "generic",
  "product",
  "category",
  "group",
  "similar",
]);
type _ShoutOutTypeSchema = typeof _ShoutOutType;
export interface ShoutOutTypeSchema extends _ShoutOutTypeSchema {}
export const ShoutOutType: ShoutOutTypeSchema = _ShoutOutType;
export type ShoutOutType = z.infer<typeof ShoutOutType>;
