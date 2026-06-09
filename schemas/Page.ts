import { z } from "zod";
import { Rect } from "./Rect.js";

/**A page in the design containing ordered references to ingredients.*/
export const Page = z
  .object({
    /**Unique identifier for this page.*/
    id: z.string().describe("Unique identifier for this page."),
    /**Ordered list of ingredient IDs rendered on this page.*/
    ingredientsOrdered: z
      .array(z.string())
      .describe("Ordered list of ingredient IDs rendered on this page."),
    /**ZIndex sorted list of page coatings with identifier and coverage.*/
    coatings: z
      .array(
        z
          .object({
            identifier: z.string().optional(),
            /**A positioned rectangle defined by x, y, width, and height measurements.*/
            rect: Rect.optional(),
          })
          .strict(),
      )
      .describe(
        "ZIndex sorted list of page coatings with identifier and coverage.",
      )
      .optional(),
  })
  .strict()
  .describe(
    "A page in the design containing ordered references to ingredients.",
  );
export type Page = z.infer<typeof Page>;
