import { z } from "zod";
import { Point } from "./Point.js";

/**A vector path consisting of ordered control points.*/
export const Path = z
  .object({
    /**Whether the path is closed.*/
    isClosed: z.string().describe("Whether the path is closed."),
    /**Map of point IDs to point definitions.*/
    points: z
      .record(z.string(), Point)
      .describe("Map of point IDs to point definitions."),
    /**Ordered list of point IDs defining the path sequence.*/
    pointsOrdered: z
      .array(z.string())
      .describe("Ordered list of point IDs defining the path sequence."),
  })
  .strict()
  .describe("A vector path consisting of ordered control points.");
export type Path = z.infer<typeof Path>;
