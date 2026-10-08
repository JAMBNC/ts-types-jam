import { z } from "zod";

const _ZIndexWidgetsRestriction = z
  .object({
    type: z.literal("zIndexWidgets"),
    /**Are z-index widgets shown for the ingredient?*/
    value: z
      .boolean()
      .describe("Are z-index widgets shown for the ingredient?"),
  })
  .strict();
type _ZIndexWidgetsRestrictionSchema = typeof _ZIndexWidgetsRestriction;
export interface ZIndexWidgetsRestrictionSchema extends _ZIndexWidgetsRestrictionSchema {}
export const ZIndexWidgetsRestriction: ZIndexWidgetsRestrictionSchema =
  _ZIndexWidgetsRestriction;
export type ZIndexWidgetsRestriction = z.infer<typeof ZIndexWidgetsRestriction>;
