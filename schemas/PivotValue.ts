import { z } from "zod";
import { SwatchType } from "./SwatchType.js";

const _PivotValue = z
  .object({
    helpText: z.string().optional(),
    label: z.string(),
    products: z.array(z.string()),
    swatchType: SwatchType.optional(),
    swatchValue: z.string().optional(),
  })
  .passthrough();
type _PivotValueSchema = typeof _PivotValue;
export interface PivotValueSchema extends _PivotValueSchema {}
export const PivotValue: PivotValueSchema = _PivotValue;
export type PivotValue = z.infer<typeof PivotValue>;
