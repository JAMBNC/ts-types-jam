import { z } from "zod";
import { DimensionUnit } from "./DimensionUnit.js";

/**A numeric value with a unit of measurement.*/
export const Dimension = z
  .object({
    /**The numeric value.*/
    v: z.number().describe("The numeric value."),
    /**The unit of measurement for dimensions.*/
    u: DimensionUnit,
  })
  .strict()
  .describe("A numeric value with a unit of measurement.");
export type Dimension = z.infer<typeof Dimension>;
