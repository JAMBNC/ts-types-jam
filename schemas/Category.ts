import { z } from "zod";

const _Category = z
  .object({
    identifiers: z.record(z.string(), z.any()).optional(),
    name: z.string(),
  })
  .passthrough();
type _CategorySchema = typeof _Category;
export interface CategorySchema extends _CategorySchema {}
export const Category: CategorySchema = _Category;
export type Category = z.infer<typeof Category>;
