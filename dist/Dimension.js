import { z } from "zod";
/**A numeric value with a unit of measurement.*/
export const Dimension = z
    .object({
    /**The numeric value.*/
    v: z.number().describe("The numeric value."),
    /**The unit of measurement for dimensions.*/
    u: z
        .enum(["mm", "in", "px", "pt"])
        .describe("The unit of measurement for dimensions."),
})
    .strict()
    .describe("A numeric value with a unit of measurement.");
