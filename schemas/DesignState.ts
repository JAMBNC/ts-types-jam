import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Ingredient } from "./Ingredient.js";
import { MaterialCode } from "./MaterialCode.js";
import { Page } from "./Page.js";
import { TextureColor } from "./TextureColor.js";
import { TextureImage } from "./TextureImage.js";

/**The complete design state containing dimensions, pages, and ingredients.*/
export const DesignState = z
  .object({
    /**Stores some session based design information*/
    expansion: z
      .object({
        canRedo: z.boolean().optional(),
        canUndo: z.boolean().optional(),
      })
      .passthrough()
      .describe("Stores some session based design information")
      .optional(),
    /**Documentation orientation 0-3 representing the rotation of this design state relative to its preferred orientation. 0 is default and each number represents a 90 degree rotation.*/
    orientation: z
      .union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)])
      .describe(
        "Documentation orientation 0-3 representing the rotation of this design state relative to its preferred orientation. 0 is default and each number represents a 90 degree rotation.",
      )
      .optional(),
    height: Dimension,
    /**Map of ingredient IDs to ingredient definitions.*/
    ingredients: z
      .record(z.string(), Ingredient)
      .describe("Map of ingredient IDs to ingredient definitions."),
    materials: z
      .array(
        z
          .object({
            /**The material code for the material being printed upon*/
            code: MaterialCode.optional(),
          })
          .strict(),
      )
      .optional(),
    /**Design metadata*/
    metadata: z
      .record(z.string(), z.any())
      .describe("Design metadata")
      .optional(),
    /**Map of texture identifiers to textures*/
    textures: z
      .record(z.string(), z.union([TextureColor, TextureImage]))
      .describe("Map of texture identifiers to textures")
      .optional(),
    /**Map of page IDs to page definitions.*/
    pages: z
      .record(z.string(), Page)
      .describe("Map of page IDs to page definitions."),
    /**Ordered list of page IDs defining page sequence.*/
    pagesOrdered: z
      .array(z.string())
      .describe("Ordered list of page IDs defining page sequence."),
    /**Version identifying the source of the design.*/
    version: z
      .string()
      .describe("Version identifying the source of the design."),
    width: Dimension,
  })
  .strict()
  .describe(
    "The complete design state containing dimensions, pages, and ingredients.",
  );
export type DesignState = z.infer<typeof DesignState>;
