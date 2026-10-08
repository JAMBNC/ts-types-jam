import { z } from "zod";

const _ScaleRestriction = z
  .object({
    type: z.literal("scale"),
    /**Can the ingredient be scaled?*/
    value: z.boolean().describe("Can the ingredient be scaled?"),
  })
  .strict();
type _ScaleRestrictionSchema = typeof _ScaleRestriction;
export interface ScaleRestrictionSchema extends _ScaleRestrictionSchema {}
export const ScaleRestriction: ScaleRestrictionSchema = _ScaleRestriction;
export type ScaleRestriction = z.infer<typeof ScaleRestriction>;
