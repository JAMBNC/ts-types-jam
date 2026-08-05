import { z } from "zod";

const _CategoryReference = z
  .object({ id: z.number().int(), label: z.string(), url: z.string() })
  .passthrough();
type _CategoryReferenceSchema = typeof _CategoryReference;
export interface CategoryReferenceSchema extends _CategoryReferenceSchema {}
export const CategoryReference: CategoryReferenceSchema = _CategoryReference;
export type CategoryReference = z.infer<typeof CategoryReference>;
