import { z } from "zod";
import { SwatchType } from "./SwatchType.js";

export const PredefinedAttributeValue = z
  .object({
    identifiers: z.record(z.string(), z.any()),
    swatches: z
      .object({ TEXT: z.string(), IMAGE: z.string(), RGB: z.string() })
      .partial()
      .optional(),
    value: z.string(),
  })
  .passthrough();
export type PredefinedAttributeValue = z.infer<typeof PredefinedAttributeValue>;
