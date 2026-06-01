import { z } from "zod";
import { Dimension } from "./Dimension.js";
import { Ingredient } from "./Ingredient.js";
import { MaterialCode } from "./MaterialCode.js";
import { Page } from "./Page.js";
/**The complete design state containing dimensions, pages, and ingredients.*/
export const DesignState = z
    .object({
    /**Stores some session based design information*/
    expansion: z
        .object({
        canUndo: z.boolean().optional(),
        canRedo: z.boolean().optional(),
    })
        .passthrough()
        .describe("Stores some session based design information")
        .optional(),
    /**Version identifying the source of the design.*/
    version: z
        .string()
        .describe("Version identifying the source of the design."),
    /**Map of coating location definitions.*/
    coatingLocations: z
        .record(z.string(), z.any())
        .describe("Map of coating location definitions."),
    dimHeight: Dimension,
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
    /**Design metadata*/
    metadata: z
        .record(z.string(), z.any())
        .describe("Design metadata")
        .optional(),
    materials: z
        .array(z
        .object({
        /**The material code for the material being printed upon*/
        code: MaterialCode.optional(),
    })
        .strict())
        .optional(),
})
    .strict()
    .describe("The complete design state containing dimensions, pages, and ingredients.");
