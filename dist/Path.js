import { z } from "zod";
/**A vector path consisting of ordered control points.*/
export const Path = z
    .object({
    /**Whether the path is closed.*/
    isClosed: z.string().describe("Whether the path is closed."),
    /**Map of point IDs to point definitions.*/
    points: z
        .record(z
        .discriminatedUnion("type", [
        z
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
            .describe("A bezier curve control point with in-handle, out-handle, and anchor position."),
        z
            .object({
            type: z.literal("line"),
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
            .describe("A straight line control point with in-handle, out-handle, and anchor position."),
    ])
        .describe("A discriminated union of path point types."))
        .describe("Map of point IDs to point definitions."),
    /**Ordered list of point IDs defining the path sequence.*/
    pointsOrdered: z
        .array(z.string())
        .describe("Ordered list of point IDs defining the path sequence."),
})
    .strict()
    .describe("A vector path consisting of ordered control points.");
