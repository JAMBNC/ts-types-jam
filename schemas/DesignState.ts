import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Ingredient } from "./Ingredient.js";
import { Page } from "./Page.js";

/**The complete design state containing dimensions, pages, and ingredients.*/
export const DesignState = z
  .object({
    /**Map of coating location definitions.*/
    coatingLocations: z
      .record(z.string(), z.any())
      .describe("Map of coating location definitions."),
    /**A numeric value with a unit of measurement.*/
    dimHeight: Dimension,
    /**A numeric value with a unit of measurement.*/
    dimWidth: Dimension,
    /**Whether the design has a buffer zone.*/
    hasBuffer: z.boolean().describe("Whether the design has a buffer zone."),
    /**Map of page IDs to page definitions.*/
    pages: z
      .record(z.string(), Page)
      .describe("Map of page IDs to page definitions."),
    /**Ordered list of page IDs defining page sequence.*/
    pagesOrdered: z
      .array(z.string())
      .describe("Ordered list of page IDs defining page sequence."),
    /**Map of ingredient IDs to ingredient definitions.*/
    ingredients: z
      .record(z.string(), Ingredient)
      .describe("Map of ingredient IDs to ingredient definitions."),
  })
  .strict()
  .describe(
    "The complete design state containing dimensions, pages, and ingredients.",
  );
export type DesignState = z.infer<typeof DesignState>;
