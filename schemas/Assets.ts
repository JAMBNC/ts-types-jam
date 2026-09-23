import { z } from "zod";

const _Assets = z
  .object({
    lamination: z
      .record(z.string(), z.object({ src: z.string() }).strict())
      .optional(),
  })
  .passthrough();
type _AssetsSchema = typeof _Assets;
export interface AssetsSchema extends _AssetsSchema {}
export const Assets: AssetsSchema = _Assets;
export type Assets = z.infer<typeof Assets>;
