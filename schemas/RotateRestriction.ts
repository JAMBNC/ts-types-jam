import { z } from "zod";

const _RotateRestriction = z
  .object({
    type: z.literal("rotate"),
    /**Can the ingredient be rotated?*/
    value: z.boolean().describe("Can the ingredient be rotated?"),
  })
  .strict();
type _RotateRestrictionSchema = typeof _RotateRestriction;
export interface RotateRestrictionSchema extends _RotateRestrictionSchema {}
export const RotateRestriction: RotateRestrictionSchema = _RotateRestriction;
export type RotateRestriction = z.infer<typeof RotateRestriction>;
