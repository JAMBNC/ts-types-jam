import { z } from "zod";

const _ZIndexRestriction = z
  .object({
    type: z.literal("zIndex"),
    /**Pins the ingredient to the top or bottom of the stacking order.*/
    value: z
      .enum(["top", "bottom"])
      .describe(
        "Pins the ingredient to the top or bottom of the stacking order.",
      ),
  })
  .strict();
type _ZIndexRestrictionSchema = typeof _ZIndexRestriction;
export interface ZIndexRestrictionSchema extends _ZIndexRestrictionSchema {}
export const ZIndexRestriction: ZIndexRestrictionSchema = _ZIndexRestriction;
export type ZIndexRestriction = z.infer<typeof ZIndexRestriction>;
