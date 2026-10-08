import { z } from "zod";

const _SelectRestriction = z
  .object({
    type: z.literal("select"),
    /**Can the ingredient be selected?*/
    value: z.boolean().describe("Can the ingredient be selected?"),
  })
  .strict();
type _SelectRestrictionSchema = typeof _SelectRestriction;
export interface SelectRestrictionSchema extends _SelectRestrictionSchema {}
export const SelectRestriction: SelectRestrictionSchema = _SelectRestriction;
export type SelectRestriction = z.infer<typeof SelectRestriction>;
