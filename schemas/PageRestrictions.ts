import { z } from "zod";

const _PageRestrictions = z
  .object({
    /**If true, new ingredients can't be added to the page.*/
    denyNewIngredients: z
      .boolean()
      .describe("If true, new ingredients can't be added to the page.")
      .optional(),
  })
  .strict();
type _PageRestrictionsSchema = typeof _PageRestrictions;
export interface PageRestrictionsSchema extends _PageRestrictionsSchema {}
export const PageRestrictions: PageRestrictionsSchema = _PageRestrictions;
export type PageRestrictions = z.infer<typeof PageRestrictions>;
