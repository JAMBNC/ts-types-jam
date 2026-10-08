import { z } from "zod";

const _DeleteRestriction = z
  .object({
    type: z.literal("delete"),
    /**Can the ingredient be deleted?*/
    value: z.boolean().describe("Can the ingredient be deleted?"),
  })
  .strict();
type _DeleteRestrictionSchema = typeof _DeleteRestriction;
export interface DeleteRestrictionSchema extends _DeleteRestrictionSchema {}
export const DeleteRestriction: DeleteRestrictionSchema = _DeleteRestriction;
export type DeleteRestriction = z.infer<typeof DeleteRestriction>;
