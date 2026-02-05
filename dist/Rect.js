import { z } from "zod";
/**A positioned rectangle defined by x, y, width, and height measurements.*/
export const Rect = z
    .object({
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
    /**A numeric value with a unit of measurement.*/
    width: z
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
    height: z
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
    .describe("A positioned rectangle defined by x, y, width, and height measurements.");
