import { z } from "zod";
import { Unit } from "./Unit.js";
const _Dimension = z
    .object({
    /**The unit of measurement for dimensions.*/
    u: Unit,
    /**The numeric value.*/
    v: z.number().describe("The numeric value."),
})
    .passthrough();
export const Dimension = _Dimension;
