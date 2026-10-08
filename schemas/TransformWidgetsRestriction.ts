import { z } from "zod";

const _TransformWidgetsRestriction = z
  .object({
    type: z.literal("transformWidgets"),
    /**Are transform widgets shown for the ingredient?*/
    value: z
      .boolean()
      .describe("Are transform widgets shown for the ingredient?"),
  })
  .strict();
type _TransformWidgetsRestrictionSchema = typeof _TransformWidgetsRestriction;
export interface TransformWidgetsRestrictionSchema extends _TransformWidgetsRestrictionSchema {}
export const TransformWidgetsRestriction: TransformWidgetsRestrictionSchema =
  _TransformWidgetsRestriction;
export type TransformWidgetsRestriction = z.infer<
  typeof TransformWidgetsRestriction
>;
