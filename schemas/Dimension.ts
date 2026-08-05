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
type _DimensionSchema = typeof _Dimension;
export interface DimensionSchema extends _DimensionSchema {}
export const Dimension: DimensionSchema = _Dimension;
export type Dimension = z.infer<typeof Dimension>;
