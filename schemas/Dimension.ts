import { z } from "zod";
import { Unit } from "./Unit.js";

export const Dimension = z
  .object({
    /**The unit of measurement for dimensions.*/
    unit: Unit,
    /**The numeric value.*/
    value: z.number().describe("The numeric value."),
  })
  .passthrough();
export type Dimension = z.infer<typeof Dimension>;
