import { z } from "zod";
import { AttributeRenderPreference } from "./AttributeRenderPreference.js";
import { PivotType } from "./PivotType.js";
import { PivotValue } from "./PivotValue.js";

const _Pivot = z
  .object({
    attributeRenderPreference: AttributeRenderPreference.optional(),
    code: z.string(),
    helpText: z.string().optional(),
    label: z.string().optional(),
    pivotType: PivotType.optional(),
    values: z.array(PivotValue),
  })
  .passthrough();
type _PivotSchema = typeof _Pivot;
export interface PivotSchema extends _PivotSchema {}
export const Pivot: PivotSchema = _Pivot;
export type Pivot = z.infer<typeof Pivot>;
