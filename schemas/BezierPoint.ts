import { z } from "zod";

/**A bezier curve control point with in-handle, out-handle, and anchor position.*/
export const BezierPoint = z
  .object({
    type: z.literal("bezier"),
    /**A numeric value with a unit of measurement.*/
    ix: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
    /**A numeric value with a unit of measurement.*/
    iy: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
    /**A numeric value with a unit of measurement.*/
    ox: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
    /**A numeric value with a unit of measurement.*/
    oy: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
    /**A numeric value with a unit of measurement.*/
    x: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
    /**A numeric value with a unit of measurement.*/
    y: z
      .object({
        /**The numeric value.*/
        v: z.number().describe("The numeric value."),
        /**The unit of measurement for dimensions.*/
        u: z
          .enum(["mm", "in", "px", "pt"])
          .describe("The unit of measurement for dimensions."),
      })
      .strict()
      .describe("A numeric value with a unit of measurement."),
  })
  .strict()
  .describe(
    "A bezier curve control point with in-handle, out-handle, and anchor position.",
  );
export type BezierPoint = z.infer<typeof BezierPoint>;
