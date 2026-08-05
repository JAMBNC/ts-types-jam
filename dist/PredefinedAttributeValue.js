import { z } from "zod";
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
export const PredefinedAttributeValue = _PredefinedAttributeValue;
