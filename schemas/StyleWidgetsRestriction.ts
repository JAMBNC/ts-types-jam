import { z } from "zod";

const _StyleWidgetsRestriction = z
  .object({
    type: z.literal("styleWidgets"),
    /**Are style widgets shown for the ingredient?*/
    value: z.boolean().describe("Are style widgets shown for the ingredient?"),
  })
  .strict();
type _StyleWidgetsRestrictionSchema = typeof _StyleWidgetsRestriction;
export interface StyleWidgetsRestrictionSchema extends _StyleWidgetsRestrictionSchema {}
export const StyleWidgetsRestriction: StyleWidgetsRestrictionSchema =
  _StyleWidgetsRestriction;
export type StyleWidgetsRestriction = z.infer<typeof StyleWidgetsRestriction>;
