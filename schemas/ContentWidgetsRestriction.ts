import { z } from "zod";

const _ContentWidgetsRestriction = z
  .object({
    type: z.literal("contentWidgets"),
    /**Are content widgets shown for the ingredient?*/
    value: z
      .boolean()
      .describe("Are content widgets shown for the ingredient?"),
  })
  .strict();
type _ContentWidgetsRestrictionSchema = typeof _ContentWidgetsRestriction;
export interface ContentWidgetsRestrictionSchema extends _ContentWidgetsRestrictionSchema {}
export const ContentWidgetsRestriction: ContentWidgetsRestrictionSchema =
  _ContentWidgetsRestriction;
export type ContentWidgetsRestriction = z.infer<
  typeof ContentWidgetsRestriction
>;
