import { z } from "zod";

const _Taxonomy = z
  .object({
    master: z.string().optional(),
    primary: z.string().optional(),
    sub: z.string().optional(),
  })
  .passthrough();
type _TaxonomySchema = typeof _Taxonomy;
export interface TaxonomySchema extends _TaxonomySchema {}
export const Taxonomy: TaxonomySchema = _Taxonomy;
export type Taxonomy = z.infer<typeof Taxonomy>;
