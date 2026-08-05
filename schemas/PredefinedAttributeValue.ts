import { z } from "zod";
import { SwatchType } from "./SwatchType.js";

const _PredefinedAttributeValue = z
  .object({
    identifiers: z.record(z.string(), z.any()),
    swatches: z
      .object({ TEXT: z.string(), IMAGE: z.string(), RGB: z.string() })
      .partial()
      .optional(),
    value: z.string(),
  })
  .passthrough();
type _PredefinedAttributeValueSchema = typeof _PredefinedAttributeValue;
export interface PredefinedAttributeValueSchema extends _PredefinedAttributeValueSchema {}
export const PredefinedAttributeValue: PredefinedAttributeValueSchema =
  _PredefinedAttributeValue;
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
