import { z } from "zod";

const _TranslateRestriction = z
  .object({
    type: z.literal("translate"),
    /**Can the ingredient be moved?*/
    value: z.boolean().describe("Can the ingredient be moved?"),
  })
  .strict();
type _TranslateRestrictionSchema = typeof _TranslateRestriction;
export interface TranslateRestrictionSchema extends _TranslateRestrictionSchema {}
export const TranslateRestriction: TranslateRestrictionSchema =
  _TranslateRestriction;
export type TranslateRestriction = z.infer<typeof TranslateRestriction>;
