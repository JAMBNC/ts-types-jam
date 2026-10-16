import { z } from "zod";
import { DerivedFromKind } from "./DerivedFromKind.js";

const _DerivedFrom = z
  .object({
    kind: DerivedFromKind,
    /**The source's id, in the vocabulary its kind names.*/
    id: z
      .string()
      .describe("The source's id, in the vocabulary its kind names."),
    /**Human garnish. Free text, never parsed.*/
    label: z
      .string()
      .describe("Human garnish. Free text, never parsed.")
      .optional(),
  })
  .strict()
  .describe(
    "What a design was derived from, stamped at instantiate/clone/transpose time. Structured rather than a display string, because reconciliation has to locate the source to fetch its current hash.",
  );
type _DerivedFromSchema = typeof _DerivedFrom;
export interface DerivedFromSchema extends _DerivedFromSchema {}
/**What a design was derived from, stamped at instantiate/clone/transpose time. Structured rather than a display string, because reconciliation has to locate the source to fetch its current hash.*/
export const DerivedFrom: DerivedFromSchema = _DerivedFrom;
export type DerivedFrom = z.infer<typeof DerivedFrom>;
